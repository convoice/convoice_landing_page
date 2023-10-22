import Link from "next/link";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { CustomButton } from "@/components/CustomButton";

const WAITLIST_URL = process.env.NEXT_PUBLIC_WAITLIST_URL;

export function Footer() {
  return (
    <footer className="rounded-t-[32px] bg-main-500 sm:rounded-t-[48px]">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center py-24 md:flex-row md:items-start md:gap-24 md:py-32 lg:gap-48">
          <Logo showText={false} className="h-28 w-28 md:basis-1/4" />
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-8 text-center font-display text-2xl font-semibold text-white sm:text-3xl md:mt-0 md:pr-8 md:text-left">
              No code, no diagram, no problem.
            </p>
            <div className="mt-6 mt-8 flex gap-6">
              <CustomButton href={WAITLIST_URL} color="white" className="">
                <span className="text-main-500 sm:text-lg">Join Waitlist</span>
              </CustomButton>
              {/*<Button*/}
              {/*  href="/register"*/}
              {/*  color="none"*/}
              {/*  className=""*/}
              {/*>*/}
              {/*  <span className="sm:text-lg">Join waitlist</span>*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-white/50 py-8 sm:justify-between">
          <p className="hidden text-xl font-semibold text-white sm:inline">
            Convoice
          </p>
          <nav
            className="mx-auto mt-0 text-sm sm:mx-0"
            aria-label="quick links"
          >
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/?scrollTo=demo" color="white">
                Demo
              </NavLink>
              <NavLink href="/?scrollTo=features" color="white">
                Features
              </NavLink>
              <NavLink href="/?scrollTo=faq" color="white">
                FAQ
              </NavLink>
              <NavLink href="/blog" color="white">
                Blog
              </NavLink>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center border-t border-white/50 pb-12 pt-6 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="Convoice on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-white transition group-hover:fill-main-100"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            {/* <Link
              href="https://github.com"
              className="group"
              aria-label="Convoice on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-white transition group-hover:fill-main-100"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link> */}
            <Link
              href="https://www.linkedin.com"
              className="group"
              aria-label="Convoice on LinkedIn"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-white transition group-hover:fill-main-100"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm text-main-100 sm:mt-0">
            &copy; {new Date().getFullYear()} Convoice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
