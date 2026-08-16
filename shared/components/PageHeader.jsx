"use client";

import React from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";

export default function PageHeader() {
  return (
    <header className="flex items-center justify-between w-full border-b mb-2 px-3 border-b-gray-200 pb-3">
      {/* Left */}
      <div>
        <h1 className="text-[24px] font-bold leading-tight text-slate-900">
          Students & Fees
        </h1>

        <p className="mt-1 text-[13px] text-slate-500">
          Manage student fee status and payments.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100"
        >
          <FiBell className="text-[22px]" />

          <span className="absolute right-0.5 top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
            3
          </span>
        </button>

        {/* Admin */}
        <button type="button" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700">
              <span className="text-sm font-semibold">A</span>
            </div>
          </div>

          <span className="text-[13px] font-semibold text-slate-800">
            Admin
          </span>

          <FiChevronDown className="text-[16px] text-slate-500" />
        </button>
      </div>
    </header>
  );
}
