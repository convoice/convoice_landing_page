"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";
import screenshotExpenses from "@/images/screenshots/expenses.png";
import screenshotPayroll from "@/images/screenshots/payroll.png";
import screenshotReporting from "@/images/screenshots/reporting.png";
import screenshotVatReturns from "@/images/screenshots/vat-returns.png";
import logoReduceCost from "@/images/logos/reduce-cost.svg";
import logoIncreaseEfficiency from "@/images/logos/increase-efficiency.svg";

export function SecondaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 pt-20 sm:py-24"
    >
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <div className="flex w-full flex-col gap-32">
            <div className="flex h-fit w-full flex-col gap-12 md:flex-row md:gap-24 lg:gap-36">
              <div className="flex flex-col items-start justify-start md:basis-5/12">
                <p className="font-display text-sm font-semibold text-violet-400 sm:text-base">
                  AGENT DESIGN PLATFORM
                </p>
                <h2 className="mt-2 text-left font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Build for scale and complexity
                </h2>
                <p className="mt-6 text-left font-sans text-lg font-medium text-slate-600">
                  With Convoice, you no longer need extra staff for call
                  answering. Convoice can handle all of that for you.
                </p>
              </div>
              <div className="h-[640px] rounded-3xl  bg-main-100 md:basis-7/12"></div>
            </div>

            <div className="flex h-fit w-full flex-col gap-12 md:flex-row-reverse md:gap-24 lg:gap-36">
              <div className="flex flex-col items-start justify-start md:basis-5/12">
                <p className="font-display text-sm font-semibold text-orange-400 sm:text-base">
                  AGENT DESIGN PLATFORM
                </p>
                <h2 className="mt-2 text-left font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Build for scale and complexity
                </h2>
                <p className="mt-6 text-left font-sans text-lg font-medium text-slate-600">
                  With Convoice, you no longer need extra personnel to manage
                  call answering tasks. Convoice can handle all of that for you
                </p>
              </div>
              <div className="h-[640px] rounded-3xl  bg-main-100 md:basis-7/12"></div>
            </div>

            <div className="flex h-fit w-full flex-col gap-12 md:flex-row md:gap-24 lg:gap-36">
              <div className="flex flex-col items-start justify-start md:basis-5/12">
                <p className="font-display text-sm font-semibold text-pink-400 sm:text-base">
                  AGENT DESIGN PLATFORM
                </p>
                <h2 className="mt-2 text-left font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Build for scale and complexity
                </h2>
                <p className="mt-6 text-left font-sans text-lg font-medium text-slate-600">
                  With Convoice, you no longer need extra personnel to manage
                  call answering tasks. Convoice can handle all of that for you
                </p>
              </div>
              <div className="h-[640px] rounded-3xl  bg-main-100 md:basis-7/12"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
