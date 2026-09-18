'use client';

import { formatCurrency } from "@/helpers/formatCurrency";
import { formatName } from "@/helpers/formatName";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const randomColors = [
  "bg-purple-100 text-purple-700",
  "bg-blue-100 text-blue-700",
  "bg-orange-100 text-orange-700",
  "bg-yellow-100 text-yellow-700",
  "bg-green-100 text-green-700",
  "bg-red-100 text-red-700",
  "bg-orange-100 text-orange-700",
  "bg-yellow-100 text-yellow-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-blue-100 text-blue-700",
];
const batchColors = {
  yaqoot_mardo: "bg-purple-100 text-purple-700",
  yaqoot_bairo: "bg-blue-100 text-blue-700",
  baneen: "bg-orange-100 text-orange-700",
  banaat: "bg-pink-100 text-pink-700",
  sigaar: "bg-yellow-100 text-yellow-700",
  kibaar: "bg-green-100 text-green-700",
  taheri_hall: "bg-red-100 text-red-700",
};

function HubReportsTableRow({
  student,
  batch,
  amountPaid,
  date,
  transaction_id,
  i
}) {

  const [isCopiedToClipboard,setIsCopiedToClipboard] = useState(false);

  function handleCopyToClipboard(){
    if(isCopiedToClipboard) return;
    navigator.clipboard.writeText(transaction_id)
    setIsCopiedToClipboard(true);
    setInterval(() => {
      setIsCopiedToClipboard(false);
    }, 5000);
  }

  
  return (
    <div className="w-full grid grid-cols-14 p-3 text-xs text-center bg-(--surface) border-b border-b-gray-100">
      <p className="text-left flex items-center">1</p>

      <h1 className="flex items-center gap-2 col-span-4 text-left font-bold">
        <p
          className={`${randomColors[i + 1]} rounded-full flex items-center justify-center h-7 w-7`}
        >
          {student.name?.split(" ")[1]?.slice(0, 1).toUpperCase()}
        </p>
        {formatName(student.name)}
      </h1>

      <p className="flex justify-center items-center ">{student.its}</p>

      <p className={` flex justify-center items-center col-span-2`}>
        <span className={`${batchColors[batch]} px-3 py-1 rounded-md`}>{batch}</span>
      </p>

      <p className="flex justify-center items-center ">
        <span className="bg-green-50 text-green-600 font-bold px-3 py-1 rounded-md">
          {formatCurrency().format(amountPaid)}
        </span>
      </p>

      <p className="flex justify-center items-center gap-2 col-span-2">
        <CiCalendarDate className="text-lg" />
        {new Date(date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      <div className="flex justify-center items-center col-span-3 ml-1 ">
        <div className="flex items-center gap-5 bg-gray-100 py-1 px-2 rounded-md">
          {transaction_id}
          <button
            onClick={handleCopyToClipboard}
            className="hover:bg-gray-200 hover:cursor-pointer px-2 py-[0.3rem] rounded-md transition-all duration-300 ease-in-out"
          >
            {isCopiedToClipboard ? (
              <FaCheck title="copied to clipboard" />
            ) : (
              <MdContentCopy title="copy to clipboard" className="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HubReportsTableRow;
