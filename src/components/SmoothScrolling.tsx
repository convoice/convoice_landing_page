"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScrolling({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    if (!searchParams["scrollTo"]) {
      return;
    }
    // Check if 'scrollTo' exists in the URL
    if (searchParams["scrollTo"]) {
      const element = document.getElementById(
        searchParams["scrollTo"] as string,
      );

      // If the element exists, scroll to it
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);
  return null;
}
