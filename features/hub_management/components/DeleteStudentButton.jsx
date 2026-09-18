import { MdDeleteOutline } from "react-icons/md";

function DeleteStudentButton({ selectedObligations }) {
  return (
    <button
      disabled={selectedObligations.length === 0}
      //   onClick={() => setIsSelecting(!isSelecting)}
      className={`disabled: flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-all duration-200 hover:border-red-300 hover:bg-red-100 hover:cursor-pointer disabled:cursor-not-allowed
            disabled:border-gray-200
            disabled:bg-gray-50
            disabled:text-gray-300
            enabled:hover:border-red-300
            enabled:hover:bg-red-100"`}
    >
      <MdDeleteOutline className="text-base" />
      Delete
    </button>
  );
}

export default DeleteStudentButton;
