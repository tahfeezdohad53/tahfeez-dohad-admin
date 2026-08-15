'use client';
import { FiMail, FiLock, FiEye, FiEyeOff, FiShield } from "react-icons/fi";
import { handleLogin } from "../api/login.api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
export default function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();
    const queryClient = useQueryClient();
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await handleLogin(email,password);
            queryClient.invalidateQueries({queryKey:['user']});
            router.push('/dashboard');
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div
      className="
      py-10
          w-[90%]
          lg:w-[35%]
          bg-[var(--surface)]
          border
          border-[var(--border)]
          rounded-3xl
          shadow-xl
          flex
          flex-col
          justify-center
          px-7
          sm:px-12
          lg:px-16
        "
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-">
        {/* Replace with your logo */}

        <img
          src="/logo.png"
          alt="Tahfeez Dohad"
          className="w-24 h-24 object-contain mb-3"
        />

        {/* <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Tahfeez Dohad
        </h1> */}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-7">
        <div className="flex-1 h-px bg-[var(--border-light)]" />

        <span className="text-[var(--primary)] text-sm">✦</span>

        <div className="flex-1 h-px bg-[var(--border-light)]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">
          Admin Login
        </h2>

        <p className="mt-2 text-[var(--text-secondary)]">
          Welcome back! Please login to continue.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="
                block
                mb-2
                text-sm
                font-medium
                text-[var(--text-primary)]
              "
          >
            Email Address
          </label>

          <div className="relative">
            <FiMail
              size={19}
              className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[var(--text-muted)]
                "
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="
                  w-full
                  h-14
                  pl-12
                  pr-4
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--text-primary)]
                  placeholder:text-[var(--text-muted)]
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                  focus:ring-4
                  focus:ring-[var(--primary-light)]
                "
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="
                block
                mb-2
                text-sm
                font-medium
                text-[var(--text-primary)]
              "
          >
            Password
          </label>

          <div className="relative">
            <FiLock
              size={19}
              className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[var(--text-muted)]
                "
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              id="password"
              type="password"
              placeholder="Enter your password"
              className="
                  w-full
                  h-14
                  pl-12
                  pr-12
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--text-primary)]
                  placeholder:text-[var(--text-muted)]
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                  focus:ring-4
                  focus:ring-[var(--primary-light)]
                "
            />

            <button
              type="button"
              className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[var(--text-muted)]
                  hover:text-[var(--text-primary)]
                  transition
                "
            >
              <FiEye size={19} />
            </button>
          </div>
        </div>

        {/* Remember / Forgot */}
        {/* <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="
                  w-4
                  h-4
                  rounded
                  border-[var(--border)]
                  accent-[var(--primary)]
                "
            />

            <span className="text-sm text-[var(--text-secondary)]">
              Remember me
            </span>
          </label>

          <button
            type="button"
            className="
                text-sm
                font-medium
                text-[var(--primary)]
                hover:text-[var(--primary-hover)]
                transition
              "
          >
            Forgot password?
          </button>
        </div> */}

        {/* Login */}
        <button
          type="submit"
          className="
              w-full
              h-14
              rounded-xl
              bg-[var(--primary)]
              hover:bg-[var(--primary-hover)]
              text-white
              font-semibold
              text-base
              transition
              shadow-lg
              shadow-indigo-500/20
              flex
              items-center
              justify-center
              gap-2
            "
        >
          <FiLock size={18} />
          Login
        </button>
      </form>

      {/* Secure Access */}
      <div className="flex items-center gap-4 mt-7">
        <div className="flex-1 h-px bg-[var(--border-light)]" />

        <div
          className="
              flex
              items-center
              gap-2
              text-sm
              text-[var(--text-muted)]
            "
        >
          <FiShield size={16} />
          <span>Secure admin access</span>
        </div>

        <div className="flex-1 h-px bg-[var(--border-light)]" />
      </div>
    </div>
  );
}
