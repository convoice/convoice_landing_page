import Link from "next/link";

import { CustomButton } from "@/components/CustomButton";
import { SelectField, TextField } from "@/components/Fields";
import { Logo } from "@/components/Logo";
import { SlimLayout } from "@/components/SlimLayout";
import Image, { type ImageProps } from "next/image";
import { type Metadata } from "next";

import celabEmoji from "@/images/emojis/party-emoji.png";

// export const metadata: Metadata = {
//   title: 'Sign Up',
// }

export default function Register() {
  return (
    <div className="flex h-screen w-screen min-w-[24rem] items-center justify-center bg-main-50 px-6">
      <div className="relative mx-auto w-[32rem] flex-col">
        <div className="flex-col rounded-3xl border-2 border-solid border-gray-100 bg-white p-10 shadow-lg">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="mt-6 flex font-display text-base font-semibold text-default">
            You are finally here!
            <Image
              className="ml-2 h-6 w-6 fill-current"
              src={celabEmoji}
              alt=""
            />
          </div>
          <div className="mt-4 flex bg-gradient-to-r from-[#FF635E] from-0% via-[#F453ED] via-50% to-[#593EFF] to-95% bg-clip-text py-1 font-display text-3xl font-semibold text-default text-transparent">
            Sign up to Convoice
          </div>
          <div className="mt-2 flex font-display text-base font-medium text-gray-500">
            Join the easiest tool to build AI agents today.
          </div>
          <button className="mx-auto mt-6 flex items-center rounded-lg bg-main px-8 py-2 font-display text-base font-medium text-white transition-all duration-300 hover:bg-main-600">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7203 4.9125C11.7625 4.02 10.5518 3.5625 9.19544 3.5625C6.79697 3.5625 4.76632 5.145 4.03835 7.2825C3.85444 7.8225 3.74713 8.4 3.74713 9C3.74713 9.6 3.84675 10.1775 4.03832 10.7175C4.76629 12.855 6.79697 14.4375 9.19544 14.4375C10.4368 14.4375 11.4866 14.1075 12.3142 13.5675C13.2797 12.93 13.931 11.9925 14.1533 10.8825H9.1954V7.5H17.8544C17.9464 8.0475 18 8.61 18 9.2025C18 11.94 17.0038 14.25 15.272 15.8175C13.7548 17.19 11.6782 18 9.19544 18C5.60157 18 2.49811 15.975 0.988535 13.035C0.360183 11.82 0 10.455 0 9C0 7.545 0.360153 6.18 0.988505 4.965C2.49808 2.025 5.60157 0 9.19544 0C11.6782 0 13.7548 0.892501 15.341 2.3475L12.7203 4.9125Z"
                fill="white"
              />
            </svg>

            <span className="ml-3">Sign up with Google</span>
          </button>
        </div>
        <div className="mt-4 text-center font-display text-sm font-medium text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>{" "}
          here!
        </div>
        {/* <div className="mt-4 text-center font-display text-xs font-normal text-gray-300">
          © Convoice, Inc. 2023
        </div> */}
      </div>
    </div>
  );
}
