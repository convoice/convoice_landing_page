"use client";

import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

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
    <main className="absolute z-20 w-screen flex flex-col min-h-screen items-center justify-center bg-bg">
      <div className="flex flex-col w-[24rem] min-w-[24rem] shadow-md px-6 py-8 rounded-lg bg-white dark:bg-dark-bg">
        <div className="flex w-full justify-center mb-4">
          <Logo showText={false} className="h-8 w-auto" />
        </div>
        <div className="flex font-display w-full justify-center font-semibold text-lg mb-4 dark:text-dark-default">
          Welcome back
        </div>
        {/* <div className="flex w-full justify-center d14 mb-6 text-center px-4 dark:text-dark-description">
          It is good to have you back.
        </div> */}

        <div className="flex flex-row gap-4">
          <button
            className="basis-1/2 flex rounded-md border justify-center items-center py-2 transition duration-200"
            disabled={true}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="20px"
              className=""
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            <span className="ml-3 font-semibold text-default text-sm dark:text-dark-default">
              Google
            </span>
          </button>

          <button
            className="basis-1/2 flex rounded-md border justify-center items-center py-2 transition duration-200 hover:bg-second-white dark:hover:bg-second-black"
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
            <span className="ml-3 font-semibold text-default text-sm dark:text-dark-default">
              Microsoft
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center w-full my-8 ">
          <hr className="w-full h-px bg-border border-0"></hr>
          <span className="absolute px-3 font-medium text-sm text-disable-black -translate-x-1/2 bg-white left-1/2 dark:bg-dark-bg">
            or
          </span>
        </div>

        <form method="post" action="/api/auth/callback/credentials">
          <div className="mb-4">
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
            <label htmlFor="email" className="block mb-2 text-sm font-sans font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 dark:text-dark-description"
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
            <label htmlFor="password" className="block mb-2 text-sm font-sans font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 dark:text-dark-description"
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
            className="transition duration-300 flex justify-center text-white bg-main hover:bg-main-600 font-medium text-sm rounded-md w-full px-5 py-2 text-center"
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
              <div className="flex d14 justify-center text-xs font-medium text-red-500 mt-2">
                Please check your email or password.
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="mt-4 text-center font-display text-sm font-medium text-gray-400">
          New to Convoice?{' '}
          <Link href="/register" className="underline">
            Sign up
          </Link>{' '}
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
