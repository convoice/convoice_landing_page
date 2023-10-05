import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";

const faqs = [
  [
    {
      question: "What is Convoice?",
      answer:
        "We offer a cost-effective self-service platform using Large Language Models (LLM) to allow businesses" +
        ", especially SMBs, to craft custom chat and voice service agents. " +
        "We help you enhance customer experience by providing more human-like, sophisticated responses that are tailored towards your business. ",
    },
    {
      question: "Why do you use LLM?",
      answer:
        "LLM stands for Large Language Model. It's a new kind of AI trained on vast amounts of text to understand and generate human-like responses. A well-known example is ChatGPT. " +
        "Convoice uses this technology to create highly sophisticated and responsive voice agents.\n",
    },
    {
      question: "What do the voice agents do?",
      answer:
        "Our LLM-powered voice agents can handle many daily customer interactions, such as providing information about " +
        "products or services, scheduling appointments or visits, actively gathering feedback, " +
        "and making personalized recommendations. They work 24/7 and guarantee a consistent, caring customer experience.",
    },
  ],
  [
    {
      question: "Why should I choose Convoice over training more human agents?",
      answer:
        "Convoice not only reduces customer service costs by up to 96% but we also ensures accuracy, consistency, " +
        "and 24/7 availability. This enables your customers receive immediate, satisfying answers to more general inquiries, " +
        "freeing your human agents to handle more unique situations.",
    },
    {
      question: "Is Convoice actually affordable for my business?",
      answer:
        "Absolutely! Convoice’s solutions are designed to be affordable, costing as low as $1 per hour. " +
        "Additionally, it can significantly reduce the average operational costs, especially for businesses without in-house customer support." +
        " We also offer a free trial period to help you get started with no pressure to pay.",
    },
    {
      question:
        "How does Convoice improve customer experience and satisfaction?",
      answer:
        "With Convoice, customers no longer face long wait times and instead get immediate, accurate answers to their queries." +
        " Our AI agents are tuned to be empathetic and caring, providing a consistent and satisfying experience for every customer. " +
        "The agents can also provide useful context when escalating more unique queries to a human.",
    },
  ],
  [
    {
      question: "What do I need to build a voice agent?",
      answer:
        "It's really simple to get started! Once you sign up and create your own voice agent, you can start customizing it by f" +
        "eeding it documents and images related to your business. If you have transcripts from previous customer interactions, we can parse them as well.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Convoice employs cutting-edge technology and security practices to ensure your customer data is protected. " +
        "We prioritize the safety and reliability of our services and the data generated. " +
        "Only you and Convoice have access to customer interactions with our voice agents.",
    },
    {
      question: "Do I need a tech expert to set up Convoice for my business?",
      answer:
        "No! Convoice is designed to be user-friendly and simplifies the process of using our cutting-edge technology." +
        " Our platform allows even those without a technical background to seamlessly set up and deploy voice and chat agents for their business.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2
            id="faq-title"
            className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            If you can’t find what you’re looking for,{" "}
            <span className="cursor-pointer font-medium text-main-500 hover:underline">
              <a href="mailto:ashwin@convoice.ai?subject=Question about Product&body=Hello, I have a question about...">
                shoot us an email
              </a>
            </span>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-rows-1 gap-8 lg:max-w-none lg:grid-rows-3"
        >
          {faqs.map((row, rowIndex) => (
            <li key={rowIndex}>
              <ul
                role="list"
                className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:gap-y-0"
              >
                {row.map((faq, faqIndex) => (
                  <li key={faqIndex} className="lg:basis-1/3">
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
  );
}
