import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useState, useRef } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export function Hero() {
  const [phone, setPhone] = useState('')
  const callOptionRef = useRef<HTMLDivElement>(null)
  const [callOption, setCallOption] = useState<'general' | 'demo'>('general')

  return (
    <Container className="pb-24 pt-16 text-center lg:pt-24 bg-gradient-to-b from-white to-slate-100/80">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex lg:basis-1/2 flex-col max-w-2xl items-center text-center lg:items-start lg:text-left">
          <h1 className="w-full font-display text-4xl font-semibold text-slate-900 sm:text-6xl">
            AI voice agents{' '}
            <span className="relative whitespace-nowrap text-main-500">
              <span className="relative">made simple</span>
            </span>{' '}
            for small businesses.
          </h1>
          <div className="mx-auto mt-6 max-w-3xl text-xl text-slate-700">
            <p>
              Businesses use Convoice to build, test, and launch automated voice
              agents.
            </p>
            {/* <p>No diagram, no code, no hassle.</p> */}
          </div>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              href="/register"
              color="main"
              className="px-6 py-3 text-xl font-semibold"
            >
              Book a demo
            </Button>
            {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button> */}
          </div>
        </div>
        <div className="flex lg:basis-1/2 flex-col items-center">
          <div className="flex items-center gap-1 rounded-full border border-[1.5px] border-main bg-main-50 px-2.5 py-0.5 font-display font-medium text-main">
            <PhoneIcon className="h-[18px] w-[18px] stroke-[2px] outline-main" />
            <p>Call Convoice Now</p>
          </div>

          <form className="mt-6 flex w-full flex-col items-start gap-6 rounded-xl border border-[1.5px] border-slate-100 bg-white p-12 text-left font-sans shadow-lg">
            <div className="flex w-full flex-col gap-2">
              <div className="font-sans text-slate-500">
                1. Select call option
              </div>
              <div className="h-fit w-full rounded-md border border-gray-200 bg-gray-100/75 px-1 py-1">
                <div className="relative flex w-full">
                  <button
                    type="button"
                    className={`z-10 basis-1/2 py-0.5 text-center text-base font-medium transition ${
                      callOption === 'general' ? 'text-black' : 'text-gray-400'
                    }`}
                    onClick={() => {
                      setCallOption('general')
                      callOptionRef.current?.setAttribute(
                        'style',
                        'left: 0%; width: 50%;',
                      )
                    }}
                  >
                    General Inquiry
                  </button>
                  <button
                    type="button"
                    className={`z-10 basis-1/2 py-0.5 text-center text-base font-medium transition ${
                      callOption === 'demo' ? 'text-black' : 'text-gray-400'
                    }`}
                    onClick={() => {
                      setCallOption('demo')
                      callOptionRef.current?.setAttribute(
                        'style',
                        'left: 50%; width: 50%;',
                      )
                    }}
                  >
                    Demo Scheduling
                  </button>
                  <span
                    className="absolute top-0 block h-full rounded-md bg-white transition-all duration-300 shadow"
                    ref={callOptionRef}
                    style={{ left: '0%', width: '50%' }}
                  ></span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <div className="font-sans text-slate-500">
                2. Enter your number (confirmation required)
              </div>
              <PhoneInput
                hideDropdown
                forceDialCode
                className="flex w-full items-center justify-center gap-2"
                inputClassName="w-full !h-10 transition-all !rounded-md !border !border-slate-200 focus:ring-0 !py-2 !px-3 !text-base"
                countrySelectorStyleProps={{ buttonClassName: '!border-0' }}
                defaultCountry="us"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <div className="font-sans text-slate-500">
                3. Tell us a bit about yourself
              </div>
              <textarea
                placeholder="e.g. I'm Tom, a new grad from Hogwarts"
                className="max-h-[80px] min-h-[80px] w-full rounded-md bg-white/10 px-4 !outline-none !ring-transparent transition-all border-gray-200 focus:border-gray-200 focus:outline-none"
                style={{ height: '120px' }}
              ></textarea>
            </div>

            <button type="button" className="mt-2 py-2.5 px-4 w-full rounded-lg bg-main transition hover:bg-main-600">
                <div className="flex items-center justify-center gap-2 font-display text-white font-semibold text-lg">
                  <p>Launch Demo</p>
                  <ArrowRightIcon className='h-4 w-4 stroke-white'/>
                </div>
            </button>
          </form>
        </div>
      </div>
      {/* Trusted by Companies */}
      {/* <div className="mt-36 lg:mt-40">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}
    </Container>
  )
}
