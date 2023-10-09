import { Dialog, Transition } from "@headlessui/react";
import { CustomButton } from "@/components/CustomButton";
import { Container } from "@/components/Container";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Fragment, useCallback, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import OtpInput from "react-otp-input";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

type verifySMSStatusType = {
  status: "standby" | "pending" | "verified" | "failed" | "unauthenticated";
  error?: string;
};

/**
 * Removes all non-numeric characters from a phone number, resulting in +2131112222
 * @param phone
 */
const formatNumber = (phone: string) => {
  return phone.replace(/\D+/g, "");
};

export function HeroDemo() {
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const [name, setName] = useState("Dear customer");
  const callOptionRef = useRef<HTMLDivElement>(null);
  const [callOption, setCallOption] = useState<"general" | "demo">("general");
  const [sendSMSError, setSendSMSError] = useState<boolean>(false);
  const [verifySMSStatus, setVerifySMSStatus] = useState<verifySMSStatusType>({
    status: "standby",
  });
  const [mayRetry, setMayRetry] = useState(true);

  const [otp, setOtp] = useState("");
  let [isOTPOpen, setIsOTPOpen] = useState(false);
  function closeModal() {
    setIsOTPOpen(false);
  }

  const onCloseModal = () => {
    // if the user clicks out to close the modal, prevent "sendSMS" for ~1 second
    // this would prevent abusing the API
    closeModal();
    setTimeout(() => {
      setVerifySMSStatus({ status: "standby" });
    }, 1200);
  };
  function openModal() {
    setOtp("");
    setIsOTPOpen(true);
  }

  const handleSendSMSError = () => {
    setSendSMSError(true);
    setMayRetry(false);
    setTimeout(() => {
      setSendSMSError(false);
      setMayRetry(true);
    }, 2200);
  };

  const handleVerifySMSError = (unauthenticated: boolean) => {
    // unauthenticated = true;
    if (unauthenticated) {
      setVerifySMSStatus({
        status: "unauthenticated",
        error: "Invalid verification code. Please try again.",
      });
      setOtp("");
    } else {
      setVerifySMSStatus({
        status: "failed",
        error: "There was an error verifying your code. Please try again.",
      });
      closeModal();
      setMayRetry(false);
      setTimeout(() => {
        setMayRetry(true);
      }, 1200);
      setTimeout(() => {
        setVerifySMSStatus({ status: "standby" });
      }, 1000);
    }
  };

  const sendSMSVerification = useCallback(async () => {
    if (verifySMSStatus.status === "pending") {
      // Do not send another SMS if one is still pending
      return;
    }
    const formattedPhone = formatNumber(phone);
    try {
      const response = await fetch(
        `${API_URL}/demo/startVerify?phone=${formattedPhone}`,
      );

      if (!response.ok) {
        handleSendSMSError();
        return;
      }
      setSendSMSError(false);
      openModal();
      setVerifySMSStatus({ status: "pending" });
    } catch (error) {
      console.log("There was an error!", error);
      handleSendSMSError();
    }
  }, [phone, verifySMSStatus.status]);

  const startDemo = useCallback(async () => {
    const preambleText = `Hi ${name}, I am an automated AI agent calling from Convoice.`;
    const formattedPhone = formatNumber(phone);
    console.log(otp);
    try {
      const response = await fetch(
        `${API_URL}/demo/?code=${otp}&preamble=${preambleText}&phone=${formattedPhone}`,
      );

      console.log(response);

      // 500 error or invalid code
      if (response && !response.ok) {
        const unauthenticated = response.status === 403;
        handleVerifySMSError(unauthenticated);
        return;
      }
      closeModal();
    } catch (error) {
      console.log("There was an error!", error);
      handleVerifySMSError(false);
    }
  }, [handleVerifySMSError, name, otp, phone]);

  const sendSMSDisabled =
    !phoneValid || !mayRetry || verifySMSStatus.status === "pending";

  return (
    <section className="bg-gradient-to-b from-white to-slate-100/80" id="demo">
      <Container className="pb-20 pt-12 text-center lg:pt-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex max-w-2xl flex-col items-center text-center lg:basis-1/2 lg:items-start lg:text-left">
            <h1 className="w-full font-display text-4xl font-semibold text-slate-900 sm:text-6xl">
              AI voice agents{" "}
              <span className="relative whitespace-nowrap text-main-500">
                <span className="relative">made simple</span>
              </span>{" "}
              for your business.
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
                href="https://airtable.com/appUsQg5CdJxsjRyX/shrbG6xQ7P9JNbOti"
                color="main"
                className="px-6 py-3 text-xl font-semibold"
              >
                Join Waitlist
              </CustomButton>
            </div>
          </div>
          <div className="flex flex-col items-center py-12 lg:basis-1/2">
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
              <div className="flex w-full flex-col gap-2">
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
                  <div className="mt-1 flex items-center justify-center rounded-md border border-red-400 bg-red-100 p-1 text-red-700">
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
                  onChange={(text) => {
                    setName(text.target.value);
                  }}
                ></textarea>
              </div>

              <button
                type="button"
                className={`mt-2 w-full rounded-lg px-4 py-2.5 transition active:scale-[98%] ${
                  sendSMSDisabled ? "bg-main-400" : "bg-main hover:bg-main-600"
                }`}
                onClick={sendSMSVerification}
                disabled={sendSMSDisabled}
              >
                <div className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-white">
                  <p>Launch Demo</p>
                  <ArrowRightIcon className="h-4 w-4 stroke-white" />
                </div>
              </button>

              {/*SMS Modal*/}
              <Transition appear show={isOTPOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-50"
                  onClose={onCloseModal}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="flex w-full max-w-sm transform flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="font-sans text-lg font-medium leading-6 text-gray-900"
                          >
                            Enter Verification Code
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {`Code has been sent to ${
                                "+1 ******" + phone.slice(-4)
                              }`}
                            </p>
                          </div>
                          {verifySMSStatus.status === "unauthenticated" ? (
                            <div className="mt-2">
                              <p className="text-sm text-red-500">
                                {verifySMSStatus.error}
                              </p>
                            </div>
                          ) : null}

                          <OtpInput
                            value={otp}
                            onChange={(event) => {
                              if (
                                verifySMSStatus.status === "unauthenticated"
                              ) {
                                // reset status to make the error disappear
                                setVerifySMSStatus({ status: "pending" });
                              }
                              // set otp
                              setOtp(event);
                            }}
                            numInputs={6}
                            containerStyle={
                              "text-black flex w-full gap-4 justify-center my-3"
                            }
                            inputStyle={
                              "!w-10 h-12 rounded-md border border-[1.5px] border-gray-300 !outline-none !ring-transparent transition-all focus:border-main focus:outline-none font-sans text-lg text-center text-black"
                            }
                            renderInput={(props) => <input {...props} />}
                          />

                          <CustomButton
                            onClick={startDemo}
                            color="main"
                            className={`mt-2 w-full py-1.5 text-base font-medium ${
                              otp.length < 6
                                ? "!hover:bg-main-400 !bg-main-400"
                                : ""
                            }`}
                            disabled={otp.length < 6}
                          >
                            Verify
                          </CustomButton>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
              {sendSMSError ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-md border border-red-400 bg-red-100 p-1 text-red-700">
                    There was an error sending the verification code.
                  </div>
                </div>
              ) : null}
              {verifySMSStatus.status === "failed" ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-md border border-red-400 bg-red-100 p-1 text-red-700">
                    {verifySMSStatus.error}
                  </div>
                </div>
              ) : null}
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
