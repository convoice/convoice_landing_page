'use client'

import { useState, useEffect, useId, useRef } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
  mobile?: boolean
  ref?: React.RefObject<HTMLDivElement>
}

const features: Array<Feature> = [
  {
    name: 'Connect',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    image: screenshotProfitLoss,
    icon: function ConnectIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Build',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Monitor',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: screenshotContacts,
    icon: function MonitorIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#ffffff66" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
]

function Feature({
  feature,
  isActive,
  mobile,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
  mobile: boolean
}) {

  return (
    <div
      className={clsx(
        className,
        'relative overflow-hidden rounded-xl p-6 text-start',
        isActive && 'text-black',
        !isActive && 'text-slate-600',
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            'w-9 rounded-lg transition-all duration-200',
            isActive ? 'bg-main-500' : 'bg-slate-400',
          )}
        >
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <feature.icon />
          </svg>
        </div>
        <h3
          className={clsx(
            'font-display text-lg font-semibold transition-all duration-200',
            isActive ? 'text-main-500' : 'text-slate-400',
          )}
        >
          {feature.name}
        </h3>
      </div>
      <p
        className={clsx(
          'mt-4 font-sans text-base font-medium leading-6 transition-all duration-200',
          isActive ? 'text-main-500' : 'text-slate-400',
        )}
      >
        {feature.summary}
      </p>
      {/* <p className="mt-4 text-sm text-slate-600">{feature.description}</p> */}
      {/* <div
        ref={progressTargetRef}
        className="absolute bottom-0 left-0 h-[5px] w-full bg-slate-300"
        hidden={!isActive || mobile}
      ></div> */}
      {/* <div
        ref={progressRef}
        className={`bg-main-500 absolute bottom-0 left-0 h-[5px] transition-[width] duration-[4000ms] ease-linear ${
          isActive && !mobile ? 'visible' : 'invisible'
        }`}
        style={{ width: isActive ? '100%' : '0%' }}
      ></div> */}
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-16 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 md:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature
            feature={feature}
            className="mx-auto max-w-2xl"
            isActive
            mobile
          />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 sm:-inset-x-6" />
            <div className="relative mx-auto min-w-[560px] sm:w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number
  setActiveIndex: (index: number) => void
}) {
  return (
    <div className="flex hidden w-full flex-col rounded-2xl border border-[1.5px] bg-white px-8 pt-8 md:mt-16 md:block">
      <div className="flex w-full items-center justify-between gap-4 lg:gap-8">
        {features.map((feature, index) => (
          <button
            key={index}
            className=""
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            <Feature
              key={feature.summary}
              feature={feature}
              className="w-full"
              isActive={index === activeIndex}
              mobile={false}
            />
          </button>
        ))}
      </div>

      <div className="mt-6 mx-auto relative w-full lg:w-[85%] pb-[40%] overflow-hidden rounded-t-2xl border-t border-x border-t-[1.5px] border-x-[1.5px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-200 ${
              index !== activeIndex ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              className="w-full"
              src={feature.image}
              alt=""
              sizes="52.75rem"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function StepFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section
      id="step-features"
      aria-label="Features for simplifying everyday business tasks"
      className="bg-slate-100/80 pb-14 pt-20 sm:pb-20 sm:pt-32 md:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
            HOW DOES IT WORK?
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Build voice agent with ease
          </h2>
          <p className="mt-4 text-lg  text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Container>
    </section>
  )
}
