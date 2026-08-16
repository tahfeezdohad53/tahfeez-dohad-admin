import React from "react";
import { FiUsers, FiCheckCircle, FiClock, FiDollarSign } from "react-icons/fi";

const stats = [
  {
    title: "Total Students",
    value: "128",
    icon: FiUsers,
    iconClass: "bg-blue-100 text-blue-600",
    borderClass: "border-blue-100",
  },
  {
    title: "Paid This Month",
    value: "92",
    icon: FiCheckCircle,
    iconClass: "bg-green-100 text-green-600",
    borderClass: "border-green-100",
  },
  {
    title: "Pending This Month",
    value: "36",
    icon: FiClock,
    iconClass: "bg-orange-100 text-orange-500",
    borderClass: "border-orange-100",
  },
  {
    title: "Total Fees Collected",
    value: "₹ 1,24,500",
    icon: FiDollarSign,
    iconClass: "bg-purple-100 text-purple-600",
    borderClass: "border-purple-100",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className={`rounded-xl border ${stat.borderClass} bg-white p-5`}
          >
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.iconClass}`}
              >
                <Icon className="text-[22px]" />
              </div>

              {/* Content */}
              <div>
                <p className="text-[12px] font-medium text-gray-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-[21px] font-bold leading-none text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
