"use client";

// import Modal from "@/shared/components/Modal";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import UpdateStudentsForm from "./UpdateStudentsForm";
// import UpdateBatchForm from "./UpdateBatchForm";

function UpdateStudentsButton({ selectedStudents }) {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div>
      <button
        disabled={selectedStudents?.length === 0}
        onClick={() => setIsShowForm(true)}
        className={`disabled:  flex items-center gap-2 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-100 hover:cursor-pointer  disabled:cursor-not-allowed
    disabled:border-gray-200
    disabled:bg-gray-50
    disabled:text-gray-300
    enabled:hover:border-indigo-300
    enabled:hover:bg-indigo-100"`}
      >
        <MdEdit className="text-base" />
        Update Students
      </button>
      {isShowForm && (
        <UpdateStudentsForm
          onClose={() => setIsShowForm(false)}
          selectedStudents={selectedStudents}
        />
      )}
    </div>
  );
}

export default UpdateStudentsButton;
