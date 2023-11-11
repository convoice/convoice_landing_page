import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { HeroDemo } from "@/components/HeroDemo";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { MajorFeatures } from "@/components/MajorFeatures";
import { Integrations } from "@/components/Integrations";
import { TheWhy } from "@/components/TheWhy";
import SmoothScrolling from "@/components/SmoothScrolling";

// export const dynamic = "force-dynamic";
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <main>
        {/*<SmoothScrolling searchParams={searchParams} />*/}
        <HeroDemo />
        <PrimaryFeatures />
        {/* <StepFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <MajorFeatures />
        <Integrations />
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
