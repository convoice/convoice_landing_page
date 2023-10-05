"use client";

import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { HeroDemo } from "@/components/HeroDemo";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { MajorFeatures } from "@/components/MajorFeatures";
import { TheWhy } from "@/components/TheWhy";
import { Examples } from "@/components/Examples";
import { Testimonials } from "@/components/Testimonials";
import { StepFeatures } from "@/components/StepFeatures";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <>
      <main>
        <HeroDemo />
        <PrimaryFeatures />
        {/* <StepFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <MajorFeatures />
        <TheWhy />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/*<Examples />*/}
        <Faqs />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </>
  );
}
