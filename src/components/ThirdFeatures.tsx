'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import logoReduceCost from '@/images/logos/reduce-cost.svg'
import logoIncreaseEfficiency from '@/images/logos/increase-efficiency.svg'

export function ThirdFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-slate-100/80 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <p className="text-main-500 font-display text-sm font-semibold sm:text-base">
            WHY YOU SHOULD USE CONVOICE?
          </p>
          <h2 className="md:mx-auto mt-2 max-w-2xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Unlock the potential of AI for your business within minutes
          </h2>

          <div className="mt-16 flex flex-col gap-8">
            <div className="flex h-fit gap-8 flex-col lg:flex-row">
              <div className="self-stretch w-full overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
                <div className="flex h-full gap-8">
                  <div className="flex flex-col items-start justify-start">
                    <Image src={logoReduceCost} alt="Reduce Cost Logo" className="w-12 h-12"/>
                    <div className="flex flex-col items-start">
                      <p className="mt-12 text-main-500 text-left font-display text-sm font-semibold md:mt-16 lg:mt-20 sm:text-base">
                        REDUCE COST
                      </p>
                      <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                        Let AI do the work for you while you focus on your core
                        business
                      </p>
                      <p className="mt-6 text-left font-sans text-lg font-medium text-slate-600">
                        With Convoice, you no longer need extra staff for call
                        answering. Convoice can handle all of that for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-full overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
                <div className="flex h-full gap-8">
                  <div className="flex flex-col items-start justify-start">
                    <Image src={logoIncreaseEfficiency} alt="Increase Efficiency Logo" className="w-12 h-12"/>
                    <div className="flex flex-col items-start">
                      <p className="mt-12 md:mt-16 lg:mt-20 text-main-500 text-left font-display text-sm font-semibold sm:text-base">
                        INCREASE EFFICIENCY
                      </p>
                      <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                        Let AI do the work for you while you focus on your core
                        business
                      </p>
                      <p className="mt-6 text-left font-sans text-lg font-medium text-slate-600">
                        With Convoice, you no longer need extra staff for call
                        answering. Convoice can handle all of that for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit w-full overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
              <div className="flex flex-col items-start">
                <p className="text-main-500 font-display text-sm font-semibold sm:text-base">
                  TRUE STORY FROM OUR CO-FOUNDER
                </p>
                <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                  Say goodbye to the old way of doing things.
                </p>
                <p className="mt-8 text-left font-sans text-lg text-slate-600">
                  Hi there,
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  Whether you are a small business owner or a large enterprise, you must have experienced the pain of managing your calls. You must have experienced the pain of managing your calls. You must have experienced the pain of managing your calls.
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  Whether you are a small business owner or a large enterprise, you must have experienced the pain of managing your calls. You must have experienced the pain of managing your calls. You must have experienced the pain of managing your calls.
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  Thanks,
                </p>
                <p className="mt-8 text-left font-sans text-lg font-medium text-slate-600">
                  Yuxing Zhou
                </p>
                <p className="text-left font-sans text-lg font-medium text-slate-600">
                  Co-founder of Convoice
                </p>
              </div>
            </div>

            {/* <div className="h-[640px] w-full overflow-hidden rounded-3xl bg-white p-12">
              <div className="flex h-full gap-8">
                <div className="flex basis-1/3 flex-col items-start justify-center">
                  <div className="h-8 w-8 py-0.5 text-2xl font-semibold text-slate-900">
                    01.
                  </div>
                  <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                    Collect Calls
                  </p>
                  <p className="mt-2 text-lg font-medium text-slate-600">
                    Record your calls and upload.
                  </p>
                </div>

                <div className="relative basis-2/3">
                  <div className="bg-main-100 absolute left-0 top-0 h-[640px] w-[960px] rounded-t-3xl border border-2 border-slate-200 outline outline-1 outline-offset-2 outline-slate-100"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  )
}
