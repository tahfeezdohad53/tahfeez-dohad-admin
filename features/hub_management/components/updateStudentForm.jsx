'use client';

import { formatName } from "@/helpers/formatName";
import { useState } from "react";
import {
  MdClose,
  MdPersonOutline,
  MdKeyboardArrowDown,
  MdSave,
} from "react-icons/md";
import toast from "react-hot-toast";
import useUpdateStudent from "@/features/accounts/hooks/useUpdateStudent";

const batches = [
  "yaqoot_mardo",
  "yaqoot_bairo",
  "kibaar",
  "sigaar",
  "baneen",
  "banaat",
  "taheri_hall",
];

function UpdateStudentForm({
  student,
  onClose,
}) {
  
      const mutate = useUpdateStudent();
      const [isSubmitting,setIsSubmitting] = useState(false);
      const [selectedBatch, setSelectedBatch] = useState(student?.batch || "");
      const [allocatedHub, setAllocatedHub] = useState(
        student?.allocatedHub || "",
      );

      async function handleUpdateStudent(e) {
        if(selectedBatch === student.batch && allocatedHub === student.allocatedHub) return toast.error('select new data to update!');
        try{
            setIsSubmitting(true);
            await mutate.mutateAsync({allocatedHub,batch:selectedBatch,studentId:student._id});
            onClose();
        }catch(err){
            console.log(err);
        }finally{
            setIsSubmitting(false);
        }
      }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-5xl overflow-visible rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 px-7 py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MdPersonOutline className="text-3xl" />
            </div>

            <div>
              <h2 className="text-2xl text-left font-semibold text-gray-800">
                Update Student
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update batch and allocated hub for this student
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-200 p-2.5 text-gray-500 transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Student Information */}
        <div className="px-7 pt-6">
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600">
                {student?.name?.split(" ")[1].charAt(0)?.toUpperCase()}
              </div>

              <div className="fle ">
                <h3 className="text-xl font-semibold text-gray-800">
                  {formatName(student?.name)}
                </h3>

                <p className="mt-1 text-left text-xs text-gray-500">
                  ITS: {student?.its}
                </p>
              </div>
            </div>

            {/* Status */}
            {/* <span
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                student?.status === "paid"
                  ? "bg-green-50 text-green-600"
                  : student?.status === "partial"
                    ? "bg-orange-50 text-orange-600"
                    : "bg-red-50 text-red-500"
              }`}
            >
              <span className="mr-2">●</span>
              {student?.status}
            </span> */}
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-6 px-7 py-7">
          {/* Batch */}
          <div className="relative">
            <label className="mb-2 text-left  block text-sm font-medium text-gray-700">
              Batch <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-11 text-sm text-gray-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              >
                <option value="" disabled>
                  Select a batch
                </option>

                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>

              <MdKeyboardArrowDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
            </div>
          </div>

          {/* Allocated Fee */}
          <div>
            <label className="mb-2  text-left block text-sm font-medium text-gray-700">
              Allocated Hub <span className="text-red-500">*</span>
            </label>

            <div className="flex overflow-hidden rounded-xl border border-gray-200 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
              <div className="flex items-center bg-gray-50 px-4 text-lg text-gray-600">
                ₹
              </div>

              <input
                type="number"
                value={allocatedHub}
                onChange={(e) => setAllocatedHub(e.target.value)}
                placeholder="Enter allocated hub"
                className="w-full px-4 py-3.5 text-sm text-gray-700 outline-none"
              />
            </div>

            <p className="mt-2 text-xs text-gray-400">
              Enter the total allocated hub for this student
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50/50 px-7 py-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:cursor-pointer hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!selectedBatch || !allocatedHub || isSubmitting}
            onClick={handleUpdateStudent}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:cursor-pointer hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <MdSave className="text-xl" />
            Update Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudentForm;
