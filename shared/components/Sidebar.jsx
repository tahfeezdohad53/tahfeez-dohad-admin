"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
  FiGrid,
  FiDollarSign,
  FiCreditCard,
  FiTrendingDown,
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiSettings,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";

const menuGroups = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: FiGrid,
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        name: "Fee Management",
        path: "/fee_management",
        icon: FiDollarSign,
      },
      {
        name: "Salary Management",
        path: "/salary_management",
        icon: FiCreditCard,
      },
      {
        name: "Other Expenses",
        path: "/other_expenses",
        icon: FiTrendingDown,
      },
    ],
  },
  {
    title: "ACADEMIC",
    items: [
      {
        name: "Students",
        path: "/students",
        icon: FiUsers,
      },
      {
        name: "Teachers",
        path: "/teachers",
        icon: FiUserCheck,
      },
      {
        name: "Classes",
        path: "/classes",
        icon: FiBookOpen,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  if(!pathname.includes('auth'))return (
    <aside className=" fixed left-0 top-0 flex h-screen w-65 flex-col border-r border-gray-200 bg-white px-3.5 py-5">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2.5 pb-6">
        <div>
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
        </div>

        <div>
          <h2 className="text-[17px] font-bold leading-tight text-gray-900">
            Tahfeez Dohad
          </h2>

          <span className="text-[11px] text-gray-400">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <p className="mb-2 px-2.5 text-[10px] font-bold tracking-widest text-gray-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.path ||
                  pathname.startsWith(`${item.path}/`);

                return (
                  <Link
                    href={item.path}
                    key={item.path}
                    className={`group flex h-11 items-center rounded-lg px-3 text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="mr-2.5 text-[18px]" />

                    <span className="flex-1">{item.name}</span>

                    <FiChevronRight
                      className={`text-sm transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 pt-3">
        {/* Settings */}
        <Link
          href="/settings"
          className={`group flex h-11 items-center rounded-lg px-3 text-[13px] font-medium transition-all ${
            pathname === "/settings" || pathname.startsWith("/settings/")
              ? "bg-blue-50 text-blue-600"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <FiSettings className="mr-2.5 text-[18px]" />

          <span className="flex-1">Settings</span>

          <FiChevronRight
            className={`text-sm transition-opacity ${
              pathname === "/settings" || pathname.startsWith("/settings/")
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          />
        </Link>

        {/* Logout */}
        <button
          type="button"
          className="group flex h-11 w-full items-center rounded-lg px-3 text-[13px] font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900"
        >
          <FiLogOut className="mr-2.5 text-[18px]" />

          <span className="flex-1 text-left">Logout</span>
        </button>

        {/* Admin Profile */}
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-gray-50 p-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-gray-700">
              Admin
            </p>

            <p className="truncate text-[10px] text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}


export function SidebarPlaceHolder(){
  const pathname = usePathname();
  if(!pathname.includes('auth'))return <div className="h-full min-w-65"></div>
}