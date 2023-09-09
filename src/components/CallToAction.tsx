import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-50 py-16"
    >
      <Container className="relative">
        <Image className="absolute" src={backgroundImage} alt="" unoptimized />
        <div className="relative h-fit w-full p-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold  text-default sm:text-4xl">
              Get started today
            </h2>
            <p className="mt-4 text-lg font-medium  text-default">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <Button href="/register" color="white" className="mt-10">
              Get 6 months free
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
