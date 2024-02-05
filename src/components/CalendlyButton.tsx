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
      className={`transition duration-200 active:scale-[97%] ${
        variant === "main"
          ? "rounded-lg border-[2px] border-main-500 px-6 py-2.5 text-xl font-semibold text-main-500 text-main-500 hover:border-main-600 hover:text-main-600 focus-visible:outline-main-600"
          : "items-center justify-center rounded-lg rounded-lg border-[2px] border-white px-4 py-1.5 font-medium text-main-500 text-white hover:border-white/80 hover:text-white/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
      }`}
      url="https://calendly.com/yuxing-convoice/chat-w-convoice-team"
      rootElement={rootElement as HTMLElement} // Update the type of rootElement prop
      text="Book a Demo"
    />
  );
}
