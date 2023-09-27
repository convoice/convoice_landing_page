"use client"

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ThirdFeatures } from '@/components/ThirdFeatures'
import { Examples } from '@/components/Examples'
import { Testimonials } from '@/components/Testimonials'
import { StepFeatures } from '@/components/StepFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <StepFeatures />
        <SecondaryFeatures />
        <ThirdFeatures />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Examples />
        <Faqs />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </>
  )
}
