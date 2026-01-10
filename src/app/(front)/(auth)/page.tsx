"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#191f2e]">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-[#121826] shadow-md px-8 py-10">
        <h1 className="text-xl font-bold text-[#000929] dark:text-white text-center">
          Login
        </h1>

        <input
          className="mt-4 w-full rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-[#0F172A]
                     text-black dark:text-white
                     px-3 py-2 outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="border rounded-lg mt-4 border-gray-300 px-3 py-2 outline-none w-full dark:border-gray-700"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-6 w-full rounded-lg bg-red-100 dark:bg-red-600 text-white py-2">
          Sign in
        </button>
      </div>
    </div>
  );
}
