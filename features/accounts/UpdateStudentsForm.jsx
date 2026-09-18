import { useState } from "react";
import toast from "react-hot-toast";
import { MdClose, MdGroups, MdSwapHoriz } from "react-icons/md";
import useUpdateStudentsBulk from "./hooks/useUpdateStudentsBulk";

const batches = [
  "yaqoot_mardo",
  "yaqoot_bairo",
  "kibaar",
  "sigaar",
  "baneen",
  "banaat",
  "taheri_hall",
];
function UpdateStudentsForm({selectedStudents,onClose}) {
  const mutate = useUpdateStudentsBulk();

    const [selectedBatch,setSelectedBatch] = useState('');
    const [hubAmount,setHubAmount] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    async function handleUpdateStudent(){
        if(!selectedBatch || !hubAmount) return toast.error('please enter appropriate data!');
        setIsSubmitting(true);
        try{
          await mutate.mutateAsync({students:selectedStudents,batch:selectedBatch,allocatedHub:hubAmount});
          onClose();
        }catch(err){
          console.log(err);
        }finally{
          setIsSubmitting(false);
        }
    }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-brightness-80">
      <div className="w-1/3 overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MdSwapHoriz className="text-xl" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                Update Students
              </h2>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Change the batch & Hub amount for selected students
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <MdClose className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5 px-6 py-6">
          {/* Selected students */}
          <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                <MdGroups className="text-xl" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">
                  Selected Students
                </p>
                <p className="text-xs text-gray-500">
                  Students who will be updated
                </p>
              </div>
            </div>

            <span className="text-lg font-semibold text-blue-600">
              {selectedStudents.length}
            </span>
          </div>

          {/* Batch select */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Batch
              </label>

              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                <option value="" disabled>
                  Select a batch
                </option>

                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch
                      .replace("_", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Hub Amount
              </label>

              <input
              onChange={(e) => setHubAmount(e.target.value)}
              value={hubAmount}
                type="number"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-100 bg-gray-50/50 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            disabled={!selectedBatch || !hubAmount || isSubmitting}
            onClick={handleUpdateStudent}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Update Batch
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudentsForm;
