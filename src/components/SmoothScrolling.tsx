"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScrolling() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if 'scrollTo' exists in the URL
    if (searchParams.get("scrollTo")) {
      const element = document.getElementById(searchParams.get("scrollTo")!);

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
