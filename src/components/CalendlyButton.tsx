import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function Calendly({
  variant = "main",
}: {
  variant?: "main" | "white";
}) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }
  }, []);

  return (
    <PopupButton
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      }}
      className={`transition duration-200 active:scale-[97%] ${variant === "main" ? 'rounded-lg border-[2px] border-main-500 px-6 py-2.5 text-xl font-semibold text-main-500 text-main-500 hover:text-main-600 hover:border-main-600 focus-visible:outline-main-600' : 'rounded-lg border-[2px] border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:outline-white text-main-500 sm:text-lg items-center justify-center rounded-lg py-1.5 px-4 font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'}`}
      url="https://calendly.com/convoice"
      rootElement={rootElement as HTMLElement} // Update the type of rootElement prop
      text="Book a Demo"
    />
  );
}
