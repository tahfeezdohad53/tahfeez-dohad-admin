'use client';

import { formatCurrency } from "@/helpers/formatCurrency";
import { formatName } from "@/helpers/formatName";
import { useState } from "react";
import { CiCalendarDate, CiCircleQuestion, CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FiRotateCw, FiTrash2 } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import useDeleteReceipt from "../hooks/useDeleteReceipt";
import toast from "react-hot-toast";
import { api } from "@/shared/lib/axios";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import HubReceiptEmailErrorMessage from "./HubReceiptEmailErrorMessage";

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
  receiptId,
  student,
  batch,
  amountPaid,
  date,
  transaction_id,
  i,
  emailStatus,
  emailErrorMessage,
  user
}) {

  const [isCopiedToClipboard,setIsCopiedToClipboard] = useState(false);
  const [showMenu,setShowMenu] = useState(false);
  const [isResending,setIsResending] = useState(false);
  const [isShowEmailError,setIsShowEmailError] = useState(false);

  const mutate = useDeleteReceipt();

  function handleCopyToClipboard(){
    if(isCopiedToClipboard) return;
    navigator.clipboard.writeText(transaction_id)
    setIsCopiedToClipboard(true);
    setInterval(() => {
      setIsCopiedToClipboard(false);
    }, 5000);
  }

  async function handleDelete(){
    const confirm = window.confirm('are you sure you want to delete receipt ?');
    if(!confirm) return;
    try{
      toast.loading('deleting receipt',{id:'receipt'});
      await mutate.mutateAsync({ id: receiptId });
    }catch(err){
      console.log(err);
    }
    setShowMenu(false);
  }

  async function handleResend(){
    const confirm = window.confirm('are you sure you want to resend receipt ?');
    if(!confirm) return;
    setIsResending(true);
    toast.loading('resending receipt...',{id:'receipt'});
    try{
      await api.get(`/hub/receipt/resend/${receiptId}`);
      toast.success("receipt sent", { id: "receipt" });

    }catch(err){
      console.log(err);
      toast.error("failed to sent receipt", { id: "receipt" });
    }finally{
      setIsResending(false);
      setShowMenu(false);
    }
  }
  
  return (
    <div className="w-full grid grid-cols-16 p-3 text-xs text-center bg-(--surface) border-b border-b-gray-100">
      {isShowEmailError && <HubReceiptEmailErrorMessage setIsShowEmailError={setIsShowEmailError} emailErrorMessage={emailErrorMessage}/>}
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
        <span className={`${batchColors[batch]} px-3 py-1 rounded-md`}>
          {batch}
        </span>
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

      <div className="flex justify-center items-center col-span-3 ml-1 truncate">
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

      <div className="my-auto w-fit">
        {emailStatus === "delivered" && (
          <p className="flex items-center gap-1 text-green-500 bg-green-50 rounded-md p-1 px-3">
            <span>
              <IoIosCheckmarkCircle className="text-xl text-green-500" />
            </span>
            <span className="font-bold">Delivered</span>
          </p>
        )}
        {emailStatus === "bounced" && (
          <button
            onClick={() => setIsShowEmailError(true)}
            className="hover:cursor-pointer hover:bg-red-100 flex items-center gap-1 text-red-500 bg-red-50 rounded-md p-1 px-3"
          >
            <span>
              <RxCrossCircled className="text-xl text-red-500" />
            </span>
            <span className="font-bold">Bounced</span>
          </button>
        )}
        {emailStatus === "delayed" && (
          <button className="flex items-center gap-1 text-yellow-500 bg-yellow-50 rounded-md p-1 px-3">
            <span>
              <CiClock2 className="text-xl text-yellow-500" />
            </span>
            <span className="font-bold">Delayed</span>
          </button>
        )}
        {!emailStatus && (
          <p className="flex items-center gap-1 text-red-500 bg-red-50 rounded-md p-1 px-3">
            <span>
              <CiCircleQuestion className="text-xl text-red-500" />
            </span>
            <span className="font-bold">Unknown</span>
          </p>
        )}
      </div>

      <div className="relative ml-auto">
        <button
          className="ml-auto my-auto hover:bg-gray-200 rounded-md p-2 hover:cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineDotsVertical />
        </button>
        {showMenu && (
          <div className="w-40 absolute top-full right-0 z-50 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            <button
              onClick={handleResend}
              disabled={isResending}
              className="hover:cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              <FiRotateCw size={16} />
              {isResending ? "Resending..." : "Resend"}
            </button>

            {user?.role === "admin" && (
              <button
                disabled={mutate.isPending}
                onClick={handleDelete}
                className="hover:cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <FiTrash2 size={16} />
                {mutate.isPending ? "Deleting..." : "Delete"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HubReportsTableRow;
