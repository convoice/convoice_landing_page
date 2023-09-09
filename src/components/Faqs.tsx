import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Convoice handle VAT?',
      answer:
        'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'How do I apply for a job at Convoice?',
      answer:
        'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
  ],
  [
    {
      question: 'What was that testimonial about tax fraud all about?',
      answer:
        'Convoice is just a software application, ultimately your books are your responsibility.',
    },
    {
      question:
        'Convoice sounds horrible but why do I still feel compelled to purchase?',
      answer:
        'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
    },
    {
      question:
        'I found other companies called Convoice, are you sure you can use this name?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-main-500 font-display text-sm font-semibold sm:text-base">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2
            id="faq-title"
            className="mt-2 font-sans tracking-tight text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            If you can’t find what you’re looking for,{' '}
            <span className="text-main-500 cursor-pointer font-medium hover:underline">
              reach out to us
            </span>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-12">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg font-semibold leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-700">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
