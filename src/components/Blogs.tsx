"use client";

import Image from "next/image";

import { Container } from "@/components/Container";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import howWeStartedConvoice from "@/images/blogs/how-we-started-convoice.png";
import convoiceServerlessLLMToVoice from "@/images/blogs/llm-to-voice-service.png";
import convoiceMeetTheTeamBriefly from "@/images/blogs/meet-our-team.png";
import buildAVoicebot from "@/images/blogs/build-a-voicebot.png";

const blogs = [
  {
    title: "How I Build A Customer Service Voicebot in 5 Minutes",
    category: "Product Demo",
    date: "Jan 13, 2024",
    link: "https://blog.convoice.ai/how-i-build-a-customer-service-voicebot-in-5-minutes-using-convoice-ai-d3de09f18277",
    image: buildAVoicebot,
  },
  {
    title: "How We Started Convoice",
    category: "Company Info",
    date: "Jan 13, 2024",
    link: "https://blog.convoice.ai/how-we-started-convoice-3395875dcacf",
    image: howWeStartedConvoice,
  },
  {
    title: "Fully Serverless, Low Latency, LLM-to-Voice Service",
    category: "Engineering",
    date: "Jan 10, 2024",
    link: "https://blog.convoice.ai/convoice-serverless-llm-to-voice-c11b05a3af32",
    image: convoiceServerlessLLMToVoice,
  },
  {
    title: "Meet the Team (Briefly)",
    category: "Company Info",
    date: "Jan 8, 2024",
    link: "https://blog.convoice.ai/convoice-meet-the-team-briefly-61b03d291d76",
    image: convoiceMeetTheTeamBriefly,
  },
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
            className="font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Check out our most recent articles
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl gap-12 md:grid-cols-2 md:gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog, blogIndex) => (
            <div
              key={blogIndex}
              className="group cursor-pointer transition hover:scale-[103%] lg:basis-1/3"
            >
              <button
                className="flex w-full flex-col gap-4"
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
                <div className="mt-2 flex items-center gap-2 text-gray-500">
                  <div className="text-normal rounded-full bg-gray-100 px-2.5 py-0.5 font-semibold leading-6">
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
