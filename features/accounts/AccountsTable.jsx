"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import AccountRow from "./AccountRow";
import TableController from "./TableController";
import toast from "react-hot-toast";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/shared/lib/axios";
import useAccounts from "./hooks/useAccounts";
import { MdClose, MdDoneAll, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import UpdateStudentsButton from "./updateStudentsButton";

export default function AccountsTable() {
  const { data } = useAccounts();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  function selecteAll(e) {
    
      setSelectedStudents((el) => [...el,...data.accounts.map((el) => el._id)]);
    
  }
  return (
    <div>
      {/* Header */}

      <div className="mb-3 flex gap-5">
        <StartSelectingButton
          setIsSelecting={setIsSelecting}
          isSelecting={isSelecting}
          setSelectedStudents={setSelectedStudents}
        />
        <UpdateStudentsButton selectedStudents={selectedStudents} />
        {isSelecting && (
          <div className="flex items-center gap-2">
            <button
              onClick={selecteAll}
              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:cursor-pointer"
            >
              <MdDoneAll className="text-base" />
              Select All
            </button>
            <span className="text-sm font-medium text-gray-500">
              {selectedStudents.length} selected
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col rounded-2xl border border-gray-200 bg-(--card) shadow-sm">
        <div className="grid grid-cols-[60px_3fr_1.2fr_1fr_1fr_0.5fr] border-b border-gray-200 bg-(--bg-tertiary)/30 px-6 py-4 text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-3">#</div>
          <div>Name</div>
          <div>ITS</div>
          <div>Batch</div>
          <div>Hub allocated</div>
          <div className="text-center">Action</div>
        </div>

        {/* Rows */}
        <div className="overflow-auto flex-1 overflow-auto">
          {data?.accounts?.map((user, index) => (
            <AccountRow
              isSelecting={isSelecting}
              selectedStudents={selectedStudents}
              setSelectedStudents={setSelectedStudents}
              key={user._id}
              user={user}
              index={(Number(page) - 1) * 10 + index}
              i={index}
            />
          ))}
        </div>

        <TableController totalRes={data?.totalRes} />
      </div>
    </div>
  );
}

function StartSelectingButton({
  setIsSelecting,
  isSelecting,
  setSelectedStudents,
}) {
  return (
    <button
      onClick={() => {
        setIsSelecting((el) => {
          if (el) {
            setSelectedStudents([]);
            return false;
          } else return true;
        });
      }}
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:cursor-pointer ${
        isSelecting
          ? "border-gray-200 bg-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-200"
          : "border-blue-200 bg-blue-50 text-blue-600 hover:border-blue-300 hover:bg-blue-100"
      }`}
    >
      {isSelecting ? (
        <MdClose className="text-base" />
      ) : (
        <MdOutlineCheckBoxOutlineBlank className="text-base" />
      )}

      {isSelecting ? "Cancel Selection" : "Select"}
    </button>
  );
}
