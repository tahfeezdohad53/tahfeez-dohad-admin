import FeeTableHeader from "./FeeTableHeader";
import FeeTableRow from "./ObligationTableRow";
import FeeTableController from "./ObligationTableController";
import { useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdEdit,
  MdDeleteOutline,
  MdClose,
  MdDoneAll,
} from "react-icons/md";
import UpdateBatchButton from "./UpdateBatchButton";
import DeleteStudentButton from "./DeleteStudentButton";

function StudentsObligationTable({obligations=[],count}) {
  const [isSelecting,setIsSelecting] = useState(false);
  const [selectedObligations,setSelectedObligations] = useState([]);
  console.log(obligations);
    return (
      <div className="">
        <div className="flex items-center gap-5 my-3 ml-1 w-full">
          {/* Select */}
          
          <StartSelectingButton setIsSelecting={setIsSelecting} isSelecting={isSelecting} setSelectedObligations={setSelectedObligations}/>

          {/* Update Batch */}
          <UpdateBatchButton selectedObligations={selectedObligations} />

          {/* Delete */}
          <DeleteStudentButton selectedObligations={selectedObligations}/>

          {isSelecting && (
            <>
              <button
                onClick={() =>
                  setSelectedObligations(obligations.map((el) => { return {id:el._id,studentId:el.student._id}}))
                }
                className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:cursor-pointer"
              >
                <MdDoneAll className="text-base" />
                Select All
              </button>
              <span className="text-sm font-medium text-gray-500">
                {selectedObligations.length} selected
              </span>
            </>
          )}
        </div>
        <div className="rounded-md overflow-auto border border-gray-200 shadow-(--shadow-sm)">
          <FeeTableHeader />

          {obligations?.map((el, i) => (
            <FeeTableRow
            batch={el.batch}
              studentId={el.student._id}
              selectedObligations={selectedObligations}
              setSelectedObligations={setSelectedObligations}
              isSelecting={isSelecting}
              key={el.student.its}
              index={i}
              id={el._id}
              its={el.student.its}
              allocatedHub={el.allocatedHub}
              amountPaid={el.amountPaid}
              status={el.status}
              name={el.student.name}
            />
          ))}

          <FeeTableController count={count} />
        </div>
      </div>
    );
}

export default StudentsObligationTable


function StartSelectingButton({setIsSelecting,isSelecting,setSelectedObligations}){
  return (
    <button
      onClick={() => {
        setIsSelecting((el) => {
          if (el) {
            setSelectedObligations([]);
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
