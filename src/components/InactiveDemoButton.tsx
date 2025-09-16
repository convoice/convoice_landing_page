"use client";

import clsx from "clsx";

import { useInactiveProject } from "@/components/InactiveProjectProvider";

type InactiveDemoButtonProps = {
  variant?: "main" | "white";
};

export function InactiveDemoButton({ variant = "main" }: InactiveDemoButtonProps) {
  const { openResourcesModal } = useInactiveProject();

  return (
    <button
      type="button"
      onClick={openResourcesModal}
      className={clsx(
        "transition duration-200 active:scale-[97%]",
        variant === "main"
          ? "rounded-lg border-[2px] border-main-500 px-6 py-2.5 text-xl font-semibold text-main-500 hover:border-main-600 hover:text-main-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600"
          : "flex items-center justify-center rounded-lg border-[2px] border-white px-4 py-1.5 font-medium text-white hover:border-white/80 hover:text-white/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg",
      )}
    >
      Book a Demo
    </button>
  );
}
