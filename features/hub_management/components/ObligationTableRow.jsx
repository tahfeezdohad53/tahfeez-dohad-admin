'use client';
import { formatCurrency } from "@/helpers/formatCurrency";
import { formatName } from "@/helpers/formatName";
import Modal from "@/shared/components/Modal";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import FeeUpdateForm from "./ObligationUpdateForm";
import useUpdateObligation from "../hooks/useUpdateObligation";
import UpdateHubAndBatchForm from "./UpdateHubAndBatchForm";
import { LuUsers } from "react-icons/lu";
import UpdateStudentForm from "./updateStudentForm";

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
export default function ObligationTableRow({
  batch,
  id,
  name,
  its,
  allocatedHub,
  amountPaid,
  status,
  index,
  isSelecting,
  setSelectedObligations,
  selectedObligations,
  studentId,
}) {
  const searchParams = useSearchParams();
  const mutation = useUpdateObligation();
  const [showHubForm, setShowHubForm] = useState(false);
  const [showStudentUpdateForm, setShowStudentUpdateForm] = useState(false);
  const page = searchParams.get("page");
  const serialNumber = (page - 1) * 10 + index + 1;
  const currency = formatCurrency();
  console.log(allocatedHub);
  let style;
  if (status === "paid") style = "bg-green-100 text-green-600";
  if (status === "partial") style = "bg-orange-100 text-orange-600";
  if (status === "pending") style = "bg-red-100 text-red-600";

  function handleSelect(e) {
    if (e.target.checked) {
      setSelectedObligations((obligations) => [...obligations, {id:id,studentId}]);
    } else {
      setSelectedObligations((obligations) =>
        obligations.filter((obligation) => obligation.id !== id),
      );
    }
  }
  return (
    <div className="w-full grid grid-cols-9 p-3 text-xs text-center bg-(--surface) border-b border-b-gray-100">
      <p className=" text-left flex items-center gap-5">
        {" "}
        {isSelecting && (
          <input
            checked={selectedObligations.find(el => el.id === id) ? true : false}
            type="checkbox"
            className="hover:cursor-pointer"
            onChange={handleSelect}
          />
        )}
        {serialNumber}
      </p>
      <h1 className="flex items-center gap-2 col-span-3 text-left font-bold">
        <p
          className={`${randomColors[index + 1]} rounded-full flex items-center justify-center h-7 w-7`}
        >
          {name.split(" ")[1].slice(0, 1).toUpperCase()}
        </p>{" "}
        {formatName(name)}
      </h1>
      <p>{its}</p>
      <p>{currency.format(allocatedHub)}</p>
      <p>{currency.format(amountPaid)}</p>
      <p
        className={`${style} font-semibold w-fit mx-auto py-1 px-3 rounded-md`}
      >
        {status}
      </p>
      <div className="col-span- relative flex gap-2 items-center justify-end">
        <button
          onClick={() => setShowHubForm(true)}
          className="mr-1 flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition hover:border-blue-200 hover:bg-blue-100"
        >
          <FiEdit3 size={14} />
          Update
        </button>
        {/* <button
          onClick={() => setShowStudentUpdateForm(true)}
          className="mr-1 flex items-center gap-1.5 rounded-lg border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600 transition hover:border-blue-200 hover:bg-blue-100"
        >
          <LuUsers size={14} />
          student
        </button> */}
      </div>
      {}
      {showHubForm && (
        <Modal onClose={() => setShowHubForm(false)}>
          <FeeUpdateForm
            onClose={() => setShowHubForm(false)}
            name={name}
            id={id}
            allocatedHub={allocatedHub}
            mutation={mutation}
            status={status}
            amountPaid={amountPaid}
          />
        </Modal>
      )}
      {/* {showStudentUpdateForm &&  <UpdateStudentForm onClose={() => setShowStudentUpdateForm(false)} student={{its,name,allocatedHub:allocatedHub,batch,id:studentId}} id={id}/>} */}
    </div>
  );
}
