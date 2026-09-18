'use client';

import Modal from "@/shared/components/Modal";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import UpdateBatchForm from "./UpdateBatchForm";

function UpdateBatchButton({ selectedObligations }) {
    const [isShowForm,setIsShowForm] = useState(false);
  return (
    <div>
      <button
        disabled={selectedObligations.length === 0}
        onClick={() => setIsShowForm(true)}
        className={`disabled:  flex items-center gap-2 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-100 hover:cursor-pointer  disabled:cursor-not-allowed
    disabled:border-gray-200
    disabled:bg-gray-50
    disabled:text-gray-300
    enabled:hover:border-indigo-300
    enabled:hover:bg-indigo-100"`}
      >
        <MdEdit className="text-base" />
        Update Batch
      </button>
      {isShowForm && (
        <UpdateBatchForm
          onClose={() => setIsShowForm(false)}
          selectedObligations={selectedObligations}
        />
      )}
    </div>
  );
}

export default UpdateBatchButton
