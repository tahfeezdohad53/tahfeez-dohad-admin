'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsClock } from "react-icons/bs"
import { CiCircleCheck, CiSearch, CiUser } from "react-icons/ci"
import { FiRefreshCw, FiDownload, FiBell } from "react-icons/fi";
import useSetFilterParams from "../hooks/useSetFilterParams";
import Select from "./Select";
import { useState } from "react";
import toast from "react-hot-toast";
// import { FiBell } from "react-icons/fi";
const filters = [
  {
    filterName: "fee_status",
    heading: "Fee status",
    filterButtons: [
      { text: "All", filterValue: "all", icon: <BsClock /> },
      { text: "Pending", filterValue: "pending", icon: <BsClock /> },
      { text: "Partial", filterValue: "partial", icon: <BsClock /> },
      { text: "Paid", filterValue: "paid", icon: <CiCircleCheck /> },
    ],
  },
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

function FeeManagementFilters() {
    useSetFilterParams();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [its,setIts] = useState('');

    function resetFilters(){
        const urlParams = new URLSearchParams(searchParams);
        urlParams.set('batch','all');
        urlParams.set('fee_status','all');
        urlParams.delete('its');
        setIts('')
        router.replace(`${pathname}?${urlParams}`,{scroll:false});
    }

    function handleSearchWithITS(e){
        if(e.key !== 'Enter') return;
        if(its.length !== 8) return toast.error('ITS length should be 8 characters long');
        const urlParams = new URLSearchParams(searchParams);
        urlParams.set("its", its);
        router.replace(`${pathname}?${urlParams}`, { scroll: false });
    }

    return (
      <div className="w-full  gap-5 px-3 border rounded-md border-gray-200 h-24 flex items-center justify-betwee )">
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
        {filters.map((el) => (
          <Select
            key={el.heading}
            filterName={el.filterName}
            heading={el.heading}
            filterButtons={el.filterButtons}
          />
        ))}
        <div className="flex items-center gap-5">
          {/* Reset Filters */}
          <button
            onClick={resetFilters}
            type="button"
            className="flex py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-gray-100 px-5 text-xs font-medium text-gray-600 transition hover:bg-gray-200"
          >
            <FiRefreshCw className="" />
            <span>Reset Filters</span>
          </button>
          {/* Export */}
          <button
            type="button"
            className="flex py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-blue-600 px-6 text-xs font-medium text-white transition hover:bg-blue-700"
          >
            <FiDownload className="" />
            <span>Export</span>
          </button>
          
          <button
          onClick={() => toast.success('an email has been sent to all students whose fees are pending',{duration:4000})}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22375f] active:scale-[0.98]"
          >
            <FiBell className="text-[17px]" />
            Notify All
          </button>
        </div>
      </div>
    );
}

export default FeeManagementFilters
