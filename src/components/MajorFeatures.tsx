"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";
import screenshotCallHistory from "@/images/screenshots/call-history.png";
import screenshotKnowledgeBase from "@/images/screenshots/knowledge-base.png";
import screenshotCallAnalytics from "@/images/screenshots/call-analytics.png";
import screenshotOutboundCalls from "@/images/screenshots/outbound-calls.png";
import logoReduceCost from "@/images/logos/reduce-cost.svg";
import logoIncreaseEfficiency from "@/images/logos/increase-efficiency.svg";

export function MajorFeatures() {
  return (
    <section
      id="features"
      aria-label="Convoice Major Features"
      className="py-16 sm:py-20 md:py-24"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
            HOW CAN CONVOICE HELP?
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Build voicebots with ease
          </h2>
          <p className="mt-4 text-lg  text-slate-700">
            Within a few minutes, you can build a voicebot, launch it, connect
            it to your phone number, and start collecting meaningful data from
            call analytics.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          <div className="flex w-full flex-col gap-6 lg:flex-row">
            <div className="relative flex flex-col justify-between rounded-xl bg-slate-50 px-8 pb-2 pt-8 lg:basis-1/3">
              <div className="flex flex-col gap-2">
                <p className="text-left font-sans text-xl font-semibold text-slate-900">
                  Custom knowledge base
                </p>
                <p className="font-regular text-left font-sans text-base text-slate-600">
                  Train your voicebot on custom knowledge bases. Generate
                  AI-powered responses for contextual and accurate answers.
                </p>
              </div>

              <Image
                className="mt-4 w-full max-w-sm self-center"
                src={screenshotKnowledgeBase}
                alt=""
                quality={100}
              />

              <div className="to-slate-0 absolute bottom-0 left-0 right-0 h-40 rounded-b-xl bg-gradient-to-t from-slate-50 from-25%"></div>
            </div>

            <div className="relative flex flex-col justify-between rounded-xl bg-slate-50 px-8 pb-2 pt-8 lg:basis-2/3">
              <div className="flex flex-col gap-2">
                <p className="text-left font-sans text-xl font-semibold text-slate-900">
                  Insights from call history
                </p>
                <p className="font-regular text-left font-sans text-base text-slate-600">
                  You can view all call recordings with transcriptions between
                  your customers & your voicebot. Learn what your customers ask
                  for to improve your product and support.
                </p>
              </div>

              <Image
                className="min-w-md mt-4 w-full self-center"
                src={screenshotCallHistory}
                alt=""
                quality={100}
              />

              <div className="to-slate-0 absolute bottom-0 left-0 right-0 h-40 rounded-b-xl bg-gradient-to-t from-slate-50 from-25%"></div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 lg:flex-row">
            <div className="relative flex flex-col justify-between rounded-xl bg-slate-50 pt-8 px-8 lg:basis-2/3">
              <div className="flex flex-col gap-2">
                <p className="text-left font-sans text-xl font-semibold text-slate-900">
                  Analytics & Monitoring
                </p>
                <p className="font-regular text-left font-sans text-base text-slate-600">
                  Built-in analytics provide real-time insights into voicebot
                  performance, enabling your team to track key metrics and
                  identify areas for optimization.
                </p>
              </div>

              <Image
                className="min-w-md mt-4 w-full self-center"
                src={screenshotCallAnalytics}
                alt=""
                quality={100}
              />

              <div className="to-slate-0 absolute bottom-0 left-0 right-0 h-28 rounded-b-xl bg-gradient-to-t from-slate-50 from-25%"></div>
            </div>

            <div className="relative flex flex-col justify-between rounded-xl bg-slate-50 px-8 pt-8 lg:basis-1/3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <p className="text-left font-sans text-xl font-semibold text-slate-900">
                    AI Outbound Call
                  </p>
                  <p className="rounded-full bg-main-100 px-1.5 py-0.5 font-sans text-xs font-semibold text-main">
                    NEW
                  </p>
                </div>
                <p className="font-regular text-left font-sans text-base text-slate-600">
                  Elevate your sales and customer engagement with AI-powered
                  automation.
                </p>
              </div>

              <Image
                className="mt-4 w-full max-w-sm self-center"
                src={screenshotOutboundCalls}
                alt=""
                quality={100}
              />

              <div className="to-slate-0 absolute bottom-0 left-0 right-0 h-28 rounded-b-xl bg-gradient-to-t from-slate-50 from-25%"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
