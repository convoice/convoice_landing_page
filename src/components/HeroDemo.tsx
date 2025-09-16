"use client";

import { CustomButton } from "@/components/CustomButton";
import { Container } from "@/components/Container";
import { InactiveDemoButton } from "@/components/InactiveDemoButton";
import { useInactiveProject } from "@/components/InactiveProjectProvider";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";

const words = ["cafe", "salon", "restaurant", "store", "startup", "business"];

const phoneUtil = PhoneNumberUtil.getInstance();
const WAITLIST_URL = process.env.NEXT_PUBLIC_WAITLIST_URL;
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export function HeroDemo() {
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const callOptionRef = useRef<HTMLDivElement>(null);
  const [callOption, setCallOption] = useState<"general" | "demo">("general");
  const { openLaunchDemoModal } = useInactiveProject();

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicText, setDynamicText] = useState("");
  const [timeoutValue, setTimeoutValue] = useState(1000); // [50, 200, 1000]

  // put above in a useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      setDynamicText(currentChar);

      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(charIndex + 1);
        setTimeoutValue(150);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
        setTimeoutValue(70);
      } else {
        setIsDeleting(!isDeleting);
        setWordIndex(isDeleting ? (wordIndex + 1) % words.length : wordIndex);
        setTimeoutValue(1000);
      }
    }, timeoutValue);
    return () => clearInterval(timer);
  }, [dynamicText, charIndex, wordIndex, isDeleting, timeoutValue]);

  return (
    <section className="bg-gradient-to-b from-white to-slate-100/80" id="demo">
      <Container className="pb-20 pt-12 text-center lg:pt-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex max-w-2xl flex-col items-center pt-20 text-center lg:basis-1/2 lg:items-start lg:py-12 lg:text-left">
            <button
              className="group flex animate-floating items-center rounded-full bg-main-50 px-1 py-1 font-display font-medium text-main shadow-lg shadow-main-200/50 transition"
              onClick={() => {
                window.open(WAITLIST_URL, "_blank");
              }}
            >
              <div className="d14 rounded-full bg-main px-2 py-[1px] text-white">
                New
              </div>
              <p className="ml-2 text-ellipsis whitespace-nowrap">
                Announcing our Private Beta. Join for Free!
              </p>
              <ChevronRightIcon className="ml-1 mr-1 h-3 w-3 stroke-main" />
            </button>
            <h1 className="mt-4 w-full font-display text-4xl font-semibold leading-10 text-slate-900 sm:text-6xl">
              AI voice agents made simple for your{" "}
              <span className="relative">
                <span className="pl-0 text-main-500 after:absolute after:top-[17%] after:ml-[4px] after:h-[75%] after:w-[4px] after:animate-[pulse_1s_ease-in-out_infinite] after:bg-main-500 after:content-['']">
                  {dynamicText}
                </span>
              </span>
            </h1>
            <div className="mx-auto mt-6 max-w-3xl text-xl text-slate-700">
              <p>
                Use Convoice to build, test, and launch automated voice agents
                for your business. Start with just a few clicks.
              </p>
              {/* <p>No diagram, no code, no hassle.</p> */}
            </div>
            <div className="mt-10 flex justify-center gap-x-6">
              <CustomButton
                href={WAITLIST_URL}
                color="main"
                className="px-6 py-2.5 text-xl font-semibold"
              >
                Join Waitlist
              </CustomButton>
              {/* <CustomButton
                href={WAITLIST_URL}
                variant="outline"
                color="main"
                className="px-6 py-2.5 text-xl font-semibold"
              >
                Book a Demo
              </CustomButton> */}
              {/* <PopupButton
                className="rounded-lg border-[2px] border-main-500 px-6 py-2.5 text-xl font-semibold text-main-500 text-main-500 transition hover:bg-main-50 focus-visible:outline-main-600 active:bg-main-50 active:text-main-500"
                url="https://calendly.com/adham-tarek"
                rootElement={document.getElementById("demo")}
                text="Book a Demo"
              /> */}
              <InactiveDemoButton />
            </div>
          </div>
          <div className="flex flex-col items-center py-12 lg:basis-1/2 lg:py-20">
            <div className="flex items-center gap-1 rounded-full border-[1.5px] border-main bg-main-50 px-2.5 py-0.5 font-display font-medium text-main">
              <PhoneIcon className="h-[18px] w-[18px] stroke-[2px] outline-main" />
              <p>Call Convoice Now</p>
            </div>

            <form className="mt-6 flex w-full flex-col items-start gap-6 rounded-xl  border-[1.5px] border-slate-100 bg-white p-12 text-left font-sans shadow-lg">
              {/*CALL OPTION SECTION*/}
              <div className="flex w-full flex-col gap-2">
                <div className="font-sans text-slate-500">
                  1. Select call option
                </div>
                <div className="h-fit w-full rounded-md border border-gray-200 bg-gray-100/75 px-1 py-1">
                  <div className="relative flex w-full">
                    <button
                      type="button"
                      className={`z-10 basis-1/2 py-0.5 text-center text-base font-medium transition ${
                        callOption === "general"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                      onClick={() => {
                        setCallOption("general");
                        callOptionRef.current?.setAttribute(
                          "style",
                          "left: 0%; width: 50%;",
                        );
                      }}
                    >
                      General Inquiry
                    </button>
                    <button
                      type="button"
                      className={`z-10 basis-1/2 py-0.5 text-center text-base font-medium transition ${
                        callOption === "demo" ? "text-black" : "text-gray-400"
                      }`}
                      onClick={() => {
                        setCallOption("demo");
                        callOptionRef.current?.setAttribute(
                          "style",
                          "left: 50%; width: 50%;",
                        );
                      }}
                    >
                      Demo Booking
                    </button>
                    {/*Animation for 300ms*/}
                    <span
                      className="absolute top-0 block h-full rounded-md bg-white shadow transition-all duration-300"
                      ref={callOptionRef}
                      style={{ left: "0%", width: "50%" }}
                    ></span>
                  </div>
                </div>
              </div>

              {/*PHONE NUMBER INPUT SECTION*/}
              <div className="flex w-full flex-col items-start gap-2">
                <div className="font-sans text-slate-500">
                  2. Enter your number (confirmation required)
                </div>
                <PhoneInput
                  hideDropdown
                  forceDialCode
                  className="flex w-full items-center justify-center gap-2"
                  inputClassName="w-full !h-10 transition-all !rounded-md !border !border-slate-200 focus:ring-0 !py-2 !px-3 !text-base"
                  countrySelectorStyleProps={{ buttonClassName: "!border-0" }}
                  defaultCountry="us"
                  value={phone}
                  onChange={(phone) => {
                    setPhone(phone);
                    setPhoneValid(isPhoneValid(phone));
                  }}
                />
                {phone.length >= 17 && !phoneValid ? (
                  <div className="t14 text-red-600">
                    Please enter a valid US number
                  </div>
                ) : null}
              </div>

              <div className="flex w-full flex-col gap-2">
                <div className="font-sans text-slate-500">
                  3. Tell us how we should address you
                </div>
                <textarea
                  placeholder="Tommy Lee"
                  className="max-h-[80px] min-h-[80px] w-full rounded-md border-gray-200 bg-white/10 px-4 !outline-none !ring-transparent transition-all focus:border-gray-200 focus:outline-none"
                  style={{ height: "120px" }}
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-2 w-full rounded-lg bg-main px-4 py-2.5 text-white transition hover:bg-main-600 active:scale-[98%]"
                onClick={openLaunchDemoModal}
              >
                <div className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-white">
                  <p>Launch Demo</p>
                  <ArrowRightIcon className="h-4 w-4 stroke-white" />
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
    </section>
  );
}
