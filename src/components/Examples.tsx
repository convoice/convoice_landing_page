import Link from 'next/link'

import { Container } from '@/components/Container'
import Image, { type ImageProps } from 'next/image'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from '@/components/Button'

interface Example {
  name: React.ReactNode
  summary: string
}

const examples: Example[] = [
  {
    name: 'Transistor',
    summary: 'Podcast hosting and analytics',
  },
  {
    name: 'Tuple',
    summary: 'Remote pair programming',
  },
  {
    name: 'Tuple',
    summary: 'Remote pair programming',
  },
  {
    name: 'Tuple',
    summary: 'Remote pair programming',
  },
  {
    name: 'Tuple',
    summary: 'Remote pair programming',
  },
  {
    name: 'Tuple',
    summary: 'Remote pair programming',
  },
]

function ExampleCard({
  example,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  example: Example
}) {
  return (
    <button className="flex flex-col items-start justify-start h-64 w-full rounded-4xl bg-white p-8 transition-all duration-300 origin-center hover:scale-[97%]">
      <p className="text-left font-display text-xl font-semibold text-slate-900">
        {example.name}
      </p>
      <p className="mt-4 text-left font-sans text-lg font-medium text-slate-600">
        {example.summary}
      </p>
    </button>
  )
}

export function Examples() {
  return (
    <section className="bg-main-500 rounded-[32px] pb-4 pt-12 sm:rounded-[48px] sm:pb-6 md:pb-6 md:pt-16 lg:py-24">
      <Container>
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <p className="text-main-100 font-display text-sm font-semibold sm:text-base">
            USE CASE EXAMPLES
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl md:mx-auto md:text-5xl">
            Explore what others have build with Convoice
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => (
            <ExampleCard key={example.name} example={example} />
          ))}
        </div>
      </Container>
    </section>
  )
}
