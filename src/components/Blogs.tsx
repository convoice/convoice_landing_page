"use client";

import Image from "next/image";

import { Container } from "@/components/Container";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import howWeStartedConvoice from "@/images/blogs/how-we-started-convoice.png";
import convoiceServerlessLLMToVoice from "@/images/blogs/llm-to-voice-service.png";
import convoiceMeetTheTeamBriefly from "@/images/blogs/meet-our-team.png";

const WAITLIST_URL = process.env.NEXT_PUBLIC_WAITLIST_URL;

const blogs = [
  [
    {
      title: "How We Started Convoice",
      category: "Company Info",
      date: "Jan 13, 2023",
      link: "https://blog.convoice.ai/how-we-started-convoice-3395875dcacf",
      image: howWeStartedConvoice,
    },
    {
      title:
        "Fully Serverless, Low Latency, LLM-to-Voice Service",
      category: "Engineering",
      date: "Jan 10, 2023",
      link: "https://blog.convoice.ai/convoice-serverless-llm-to-voice-c11b05a3af32",
      image: convoiceServerlessLLMToVoice,
    },
    {
      title: "Meet the Team (Briefly)",
      category: "Company Info",
      date: "Jan 8, 2023",
      link: "https://blog.convoice.ai/convoice-meet-the-team-briefly-61b03d291d76",
      image: convoiceMeetTheTeamBriefly,
    },
  ],
];

export function Blogs() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-sm font-semibold text-main-500 sm:text-base">
            FEATURED BLOGS
          </p>
          <h2
            id="blog-title"
            className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Our most recent articles
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-rows-1 gap-8 lg:max-w-none"
        >
          {blogs.map((row, rowIndex) => (
            <li key={rowIndex}>
              <ul
                role="list"
                className="flex flex-col gap-y-20 lg:flex-row lg:gap-x-12 lg:gap-y-0"
              >
                {row.map((blog, blogIndex) => (
                  <li
                    key={blogIndex}
                    className="group cursor-pointer transition hover:scale-[103%] lg:basis-1/3"
                  >
                    <button
                      className="flex flex-col gap-4 w-full"
                      onClick={() => {
                        window.open(blog.link, "_blank");
                      }}
                    >
                      <Image
                        alt={blog.title}
                        src={blog.image}
                        layout="responsive"
                        quality={100}
                        className="rounded-2xl"
                      ></Image>
                      <div className="flex items-center mt-2 gap-2 text-gray-500">
                        <div className="text-normal rounded-full bg-gray-100 px-3 py-1 font-semibold leading-6">
                          {blog.category}
                        </div>
                        &#8212;&#8212;
                        <div className="font-medium">{blog.date}</div>
                      </div>
                      <h3 className="text-start font-display text-2xl font-semibold leading-7 text-slate-900">
                        {blog.title}
                        <ArrowUpRightIcon className="mb-3 ml-0.5 inline-block h-[20px] w-[20px] stroke-main-500/0 stroke-[0.5px] text-main-500/0 transition group-hover:stroke-main-500 group-hover:text-main-500" />
                      </h3>
                    </button>
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
