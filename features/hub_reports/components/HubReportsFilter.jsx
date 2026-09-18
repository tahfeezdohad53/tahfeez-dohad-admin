'use client';

import Select from "@/features/hub_management/components/Select";
import useSetFilterParams from "@/features/hub_management/hooks/useSetFilterParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiCalendar, CiSearch, CiUser } from "react-icons/ci";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import useSetSearchParams from "../hooks/useSetSearchParams";
import toast from "react-hot-toast";
import { GoStack } from "react-icons/go";


const filters = [
//   {
//     filterName: "obligation_status",
//     heading: "Obligation status",
//     filterButtons: [
//       { text: "All", filterValue: "all", icon: <BsClock /> },
//       { text: "Pending", filterValue: "pending", icon: <BsClock /> },
//       { text: "Partial", filterValue: "partial", icon: <BsClock /> },
//       { text: "Paid", filterValue: "paid", icon: <CiCircleCheck /> },
//     ],
//   },
  {
    filterName: "batch",
    heading: "Batch",
    filterButtons: [
      { text: "All", filterValue: "all", icon: <CiUser /> },
      { text: "Yaqoot_mardo", filterValue: "yaqoot_mardo", icon: <CiUser /> },
      { text: "Yaqoot_bairo", filterValue: "yaqoot_bairo", icon: <CiUser /> },
      { text: "Kibaar", filterValue: "kibaar", icon: <CiUser /> },
      { text: "Sigaar", filterValue: "sigaar", icon: <CiUser /> },
      { text: "Baneen", filterValue: "baneen", icon: <CiUser /> },
      { text: "Banaat", filterValue: "banaat", icon: <CiUser /> },
      { text: "Taheri_hall", filterValue: "taheri_hall", icon: <CiUser /> },
    ],
  },
];

function HubReportsFilter() {
    const searchParams = useSearchParams();
        const pathname = usePathname();
        const router = useRouter();
        const [its,setIts] = useState('');

        const from = searchParams.get('from');
        const to = searchParams.get('to');
        useSetSearchParams();

        function handleApplyFilter(key,value){
            if(key === 'from' || key === 'to'){
                const date = new Date();
                value =  `${value}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:00+05:30`; 
            }
            const url = new URLSearchParams(searchParams);
            url.set(key,value);
            router.replace(`${pathname}?${url}`,{scroll:false});
        }

        function handleSearchWithITS(e) {
          if (e.key !== "Enter") return;
          if (its.length !== 8)
            return toast.error("ITS length should be 8 characters long");
          const urlParams = new URLSearchParams(searchParams);
          urlParams.set("its", its);
          router.replace(`${pathname}?${urlParams}`, { scroll: false });
        }

         function resetFilters() {
           const urlParams = new URLSearchParams(searchParams);
           urlParams.set("batch", "all");
           urlParams.set("page", "1");
           urlParams.delete("its");
           urlParams.delete("from");
           urlParams.delete("to");
           setIts("");
           router.replace(`${pathname}?${urlParams}`, { scroll: false });
         }
    return (
      <div className="w-full  gap-5 px-3 border rounded-md border-gray-200 py-5 flex items-end justify-betwee ">
        <div className="flex-1">
          <label htmlFor="" className="text-xs text-gray-500 ml-1">
            Search
          </label>
          <div className="relative flex-1 flex items-center gap-3">
            <input
              onKeyDown={handleSearchWithITS}
              onChange={(e) => setIts(e.target.value)}
              value={its}
              type="number"
              required
              placeholder="search with student its"
              className="w-full bg-(--surface) px-3 pl-10 text-sm font-thin focus:border-blue-500 focus:outline-none transition-all duration-300 ease-in-out py-2 border border-gray-300 rounded-md placeholder:text-xs"
            />
            <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="relative">
          <label className="mb-1 flex items-center gap-1 z-50  left-3 text-[0.65rem] text-gray-600  px-2 rounded-md top-[-10]">
            <CiCalendar className="text-xs" /> From Date
          </label>
          <input
            value={from?.split("T")[0] || ""}
            onChange={(e) => handleApplyFilter("from", e.target.value)}
            type="date"
            id="from"
            className="transition text-sm text-gray-600 border-gray-300 bg-(--surface) relative flex justify-between items-center px-3 border rounded-md h-10"
          />
        </div>
        <div className="relative">
          <label className="mb-1 flex items-center gap-1 z-50  left-3 text-[0.65rem] text-gray-600  px-2 rounded-md top-[-10]">
            <CiCalendar className="text-xs" /> To Date
          </label>
          <input
            value={to?.split("T")[0] || ""}
            onChange={(e) => handleApplyFilter("to", e.target.value)}
            type="date"
            id="from"
            className="transition text-sm text-gray-600 border-gray-300 bg-(--surface) relative flex justify-between items-center px-3 border rounded-md h-10"
          />
        </div>

        <div className="borde">
          {filters.map((el) => (
            <Select
              icon={<GoStack />}
              key={el.heading}
              filterName={el.filterName}
              heading={el.heading}
              filterButtons={el.filterButtons}
            />
          ))}
        </div>
        {/* Reset Filters */}
        <button
          onClick={resetFilters}
          type="button"
          className="flex h-fit self-end py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-gray-100 px-5 text-xs font-medium text-gray-600 transition hover:bg-gray-200"
        >
          <FiRefreshCw className="" />
          <span>Reset Filters</span>
        </button>
        {/* Export */}
        <button
          type="button"
          className="flex h-fit self-end py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-blue-600 px-6 text-xs font-medium text-white transition hover:bg-blue-700"
        >
          <FiDownload className="" />
          <span>Export</span>
        </button>

        {/* <button
            onClick={() =>
              toast.success(
                "an email has been sent to all students whose fees are pending",
                { duration: 4000 },
              )
            }
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22375f] active:scale-[0.98]"
          >
            <FiBell className="text-[17px]" />
            Notify All
          </button> */}
      </div>
    );
}

export default HubReportsFilter
