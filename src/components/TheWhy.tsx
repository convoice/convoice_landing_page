"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import logoReduceCost from "@/images/logos/reduce-cost.svg";
import logoIncreaseEfficiency from "@/images/logos/increase-efficiency.svg";

export function TheWhy() {
  return (
    <section
      id="the-why"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-slate-100/80 pb-28 pt-20 sm:py-24"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
            WHY YOU SHOULD USE CONVOICE?
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl md:mx-auto">
            Unlock business potential with AI-powered customer service
          </h2>

          <div className="mt-16 flex flex-col gap-8">
            <div className="flex h-fit flex-col gap-8 lg:flex-row">
              <div className="w-full self-stretch overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
                <div className="flex h-full gap-8">
                  <div className="flex flex-col items-start justify-start">
                    <Image
                      src={logoReduceCost}
                      alt="Reduce Cost Logo"
                      className="h-12 w-12"
                    />
                    <div className="flex flex-col items-start">
                      <p className="mt-12 text-left font-display text-sm font-semibold text-main-500 sm:text-base md:mt-16 lg:mt-20">
                        REDUCE COST
                      </p>
                      <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                        Save time and money on hiring and training new staff.
                      </p>
                      <p className="font-regular mt-6 text-left font-sans text-lg text-slate-600">
                        We are here to empower you you with advanced customer
                        service automation, once exclusive to major
                        corporations. Save time and money with our 24/7,
                        dedicated, instantly trainable voice agents. Say goodbye
                        to staffing hassles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full self-stretch overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
                <div className="flex h-full gap-8">
                  <div className="flex flex-col items-start justify-start">
                    <Image
                      src={logoIncreaseEfficiency}
                      alt="Increase Efficiency Logo"
                      className="h-12 w-12"
                    />
                    <div className="flex flex-col items-start">
                      <p className="mt-12 text-left font-display text-sm font-semibold text-main-500 sm:text-base md:mt-16 lg:mt-20">
                        INCREASE EFFICIENCY
                      </p>
                      <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                        Grow fast without worrying about customer service, ever.
                      </p>
                      <p className="font-regular mt-6 text-left font-sans text-lg text-slate-600">
                        With Convoice, you can confidently entrust the majority
                        of your customer interactions to our advanced voicebots,
                        freeing you to focus on your core business with
                        reliable, always-available customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit w-full overflow-hidden rounded-3xl bg-white p-8 sm:p-12 md:p-20">
              <div className="flex flex-col items-start">
                <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
                  TRUE STORY FROM OUR CO-FOUNDER
                </p>
                <p className="mt-2 text-left font-display text-3xl font-semibold text-slate-900">
                  Say goodbye to the old way of doing things.
                </p>
                <p className="mt-8 text-left font-sans text-lg text-slate-600">
                  Hi there,
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  About a year ago, I had a major surgery and was hospitalized
                  for almost a month. I was lucky to recover well. The real
                  headache, however, started after I was discharged. I had to
                  deal with hospital bills, insurance claims, medical equipment
                  rentals, and constantly calling places to ask if they could
                  accommodate me. In a single month, I ended up calling dozens
                  of times every day and spent probably 20+ hours just waiting
                  to speak with a human. I was frustrated and exhausted.
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  A few months later, ChatGPT was released, reshaping the AI
                  landscape almost overnight. I saw the opportunity to build a
                  product that could help customers like me. People have been
                  trying to make all kinds of automated agents to call on
                  users&apos behalf, such as ordering pizzas. However, I wanted
                  to take it a step further by directly optimizing the business
                  side of customer interactions. With Convoice, we can help
                  businesses improve efficiency and reduce cost, while providing
                  a better customer experience, ultimately benefiting everyone.
                </p>
                <p className="mt-6 text-left font-sans text-lg text-slate-600">
                  If you are interested in seeing how the latest AI will
                  transform your customer service and help your customers
                  receive support quickly and effortlessly, please give us a
                  try.
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
  );
}
