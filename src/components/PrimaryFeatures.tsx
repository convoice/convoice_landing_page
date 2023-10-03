import { useEffect, useId, useRef } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { BookOpenIcon, CalendarDaysIcon, ChartBarSquareIcon, ClockIcon, DocumentTextIcon, MegaphoneIcon, PresentationChartLineIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  icon: React.ComponentType
  mobile?: boolean
  ref?: React.RefObject<HTMLDivElement>
}

const features: Array<Feature> = [
  {
    name: 'Available 24/7',
    summary: 'Scale up and scale down on demand. No need to hire, train, and manage a team of agents.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    icon: function ReportingIcon() {
      return (
        <ClockIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    }
  },
  {
    name: 'Ultra-realistic voices',
    summary:
      'Choose from a variety of voices to create the perfect experience for your customers.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    icon: function InventoryIcon() {
      return (
        <SpeakerWaveIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    },
  },
  {
    name: 'Connect to knowledge bases',
    summary:
      'Feed your bots knowledge from your sources to give them more context and make them smarter.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: function ContactsIcon() {
      return (
        <BookOpenIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    },
  },
  {
    name: 'Appointment booking',
    summary: 'Let your customers book seamlessly book appointments with your voice agent.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    icon: function ReportingIcon() {
      return (
        <CalendarDaysIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    }
  },
  {
    name: 'Product promotion',
    summary:
      'Enhance brand publicity by promoting your products and services to customers with your voice agent.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    icon: function InventoryIcon() {
      return (
        <MegaphoneIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    },
  },
  {
    name: 'Call Analytics',
    summary:
      'Monitor your bot’s performance and get insights into how your customers are interacting with it.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    icon: function ContactsIcon() {
      return (
        <PresentationChartLineIcon className="h-6 w-6 text-main" aria-hidden="true" />
      )
    },
  },
]

function Feature({
  feature,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
}) {
  return (
    <div className={clsx(className, 'overflow-hidden p-4')} {...props}>
      <div className="flex w-full flex-row gap-4">
        <div
          className={clsx(
            'w-10 h-10 rounded-lg p-2 outline outline-[1.8px] outline-main',
            true ? 'bg-main-50' : 'bg-slate-500',
          )}
        >
          <feature.icon />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-slate-900">
            {feature.name}
          </h3>
          <p className="font-sans text-base leading-6 text-slate-600">
            {feature.summary}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="primary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="bg-slate-100/80 py-8"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center mb-14 hidden">
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
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature
              feature={feature}
              key={index}
              className="flex flex-col items-center gap-6"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
