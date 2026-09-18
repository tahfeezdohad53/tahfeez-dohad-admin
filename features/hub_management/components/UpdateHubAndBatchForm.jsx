import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdEdit } from "react-icons/md";

function UpdateHubAndBatchForm() {
    const [openMenu, setOpenMenu] = useState(null);
  return (
    <div className="relative">
      <button
        // onClick={() =>
        //   setOpenMenu(openMenu === student._id ? null : student._id)
        // }
        className="rounded-md p-1 text-gray-500 transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700"
      >
        <HiOutlineDotsVertical />
      </button>

      {/* {openMenu === student._id && ( */}
        <div className="absolute right-0 top-8 z-50 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
          <button
            onClick={() => {
              setOpenMenu(null);
              handleUpdateStudent(student);
            }}
            className="border-b border-gray-300 flex w-full items-center gap-2 rounded-tr-md rounded-tl-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <MdEdit className="text-base text-gray-500" />
            Update Hub
          </button>
          <button
            onClick={() => {
              setOpenMenu(null);
              handleUpdateStudent(student);
            }}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <MdEdit className="text-base text-gray-500" />
            Update Student
          </button>
        </div>
      {/* )} */}
    </div>
  );
}

export default UpdateHubAndBatchForm;
