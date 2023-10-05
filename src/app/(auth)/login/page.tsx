"use client";

import Link from "next/link";

import { CustomButton } from "@/components/CustomButton";
import { TextField } from "@/components/Fields";
import { Logo } from "@/components/Logo";
import { SlimLayout } from "@/components/SlimLayout";
import { type Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Sign In',
// }

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { signIn, getSession, getCsrfToken } from "next-auth/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function LogIn() {
  var bcrypt = require("bcryptjs");
  const saltRounds = 10;

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState<boolean>(false);

  return (
    <main className="absolute z-20 flex min-h-screen w-screen flex-col items-center justify-center bg-bg">
      <div className="dark:bg-dark-bg flex w-[24rem] min-w-[24rem] flex-col rounded-lg bg-white px-6 py-8 shadow-md">
        <div className="mb-4 flex w-full justify-center">
          <Logo showText={false} className="h-8 w-auto" />
        </div>
        <div className="dark:text-dark-default mb-4 flex w-full justify-center font-display text-lg font-semibold">
          Welcome back
        </div>
        {/* <div className="flex w-full justify-center d14 mb-6 text-center px-4 dark:text-dark-description">
          It is good to have you back.
        </div> */}

        <div className="flex flex-row gap-4">
          <button
            className="flex basis-1/2 items-center justify-center rounded-md border py-2 transition duration-200"
            disabled={true}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="20px"
              className=""
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            <span className="dark:text-dark-default ml-3 text-sm font-semibold text-default">
              Google
            </span>
          </button>

          <button
            className="hover:bg-second-white dark:hover:bg-second-black flex basis-1/2 items-center justify-center rounded-md border py-2 transition duration-200"
            onClick={(e) => {
              e.preventDefault(); // THIS IS IMPORTANT SOMEHOW
              signIn("cognito", { callbackUrl: "http://localhost:3000/files" });
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="20px"
              className=""
              alt="Microsoft sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            />
            <span className="dark:text-dark-default ml-3 text-sm font-semibold text-default">
              Microsoft
            </span>
          </button>
        </div>

        <div className="my-8 flex w-full items-center justify-center ">
          <hr className="h-px w-full border-0 bg-border"></hr>
          <span className="text-disable-black dark:bg-dark-bg absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm font-medium">
            or
          </span>
        </div>

        <form method="post" action="/api/auth/callback/credentials">
          <div className="mb-4">
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
            <label
              htmlFor="email"
              className="mb-2 block font-sans text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="dark:text-dark-description block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
              placeholder="app@convoice.ai"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setCredentialError(false);
              }}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block font-sans text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="dark:text-dark-description block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
              placeholder="•••••••••"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setCredentialError(false);
              }}
            ></input>
          </div>
          <button
            className="flex w-full justify-center rounded-md bg-main px-5 py-2 text-center text-sm font-medium text-white transition duration-300 hover:bg-main-600"
            onClick={async (e) => {
              if (email === "" || password === "") return;
              e.preventDefault(); // THIS IS IMPORTANT SOMEHOW
              const hashedPassword = await bcrypt.hash(password, saltRounds);
              const res = await signIn("credentials", {
                username: email,
                password: hashedPassword,
                callbackUrl: `/files`,
                redirect: false,
              });
              setEmail("");
              setPassword("");
              if (res?.error) {
                setCredentialError(true);
              } else {
                router.push("/files");
              }
            }}
          >
            Sign in
          </button>
          <div>
            {credentialError && (
              <div className="d14 mt-2 flex justify-center text-xs font-medium text-red-500">
                Please check your email or password.
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="mt-4 text-center font-display text-sm font-medium text-gray-400">
        New to Convoice?{" "}
        <Link href="/register" className="underline">
          Sign up
        </Link>{" "}
        here!
      </div>
    </main>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   }
// }
