import { formatName } from "@/helpers/formatName";
import { FiEdit3 } from "react-icons/fi";
import UpdateStudentForm from "../hub_management/components/updateStudentForm";
import { useState } from "react";
import useUpdateStudent from "./hooks/useUpdateStudent";
import { formatCurrency } from "@/helpers/formatCurrency";


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

export default function AccountRow({ user, index,i,selectedStudents,isSelecting,setSelectedStudents }) {
  const formattedName = formatName(user.name);
  const [isShowForm,setIsShowForm] = useState(false);  
  
  function handleSelect(e) {
    if (e.target.checked) {
      setSelectedStudents(students => [...students,user?._id]);
    } else {
      setSelectedStudents((students) =>
        students.filter((student) => student !== user?._id),
      );
    }
  }
  return (
    <div className="grid grid-cols-[60px_3fr_1.2fr_1fr_1fr_0.5fr] items-center border-b border-gray-100 px-6 py-4 transition bg-(--surface)">
      <div className="flex items-cente gap-2">
        {isSelecting && <input type="checkbox" onChange={handleSelect} checked={selectedStudents.includes(user?._id)}/>}
        <div className="text-sm text-gray-600">{index + 1}</div>
      </div>

      <h1 className="flex items-center gap-2 col-span- text-left font-bold">
              <p
                className={`${randomColors[i + 1]} rounded-full flex items-center justify-center min-h-7 min-w-7`}
              >
                {user.name.split(" ")[1].slice(0, 1).toUpperCase()}
              </p>{" "}
              {formatName(user.name)}
            </h1>

      <div className="text-gray-70 text-sm tracking-wider bg-gray-200 w-fit px-3 py-1 rounded-md">{user.its}</div>

      {/* <div>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            user.role === "Admin"
              ? "bg-violet-100 text-violet-700"
              : user.role === "Teacher"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
          }`}
        >
          {user.role}
        </span>
      </div> */}

      <div className="text-gray-700">{user.batch || "-"}</div>
      <div className="text-gray-700">{formatCurrency().format(user.allocatedHub || 0) || "-"}</div>

      <button
        onClick={() => setIsShowForm(true)}
        className="absolut w-fit ml-auto right-5 mr-1 flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition hover:border-blue-200 hover:bg-blue-100"
      >
        <FiEdit3 size={14} />
        update
      </button>
      {isShowForm && (
        <UpdateStudentForm
          student={user}
          onClose={() => setIsShowForm(false)}
        />
      )}
    </div>
  );
}
