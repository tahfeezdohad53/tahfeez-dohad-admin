import toast from "react-hot-toast";
import { BiUserPlus } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import useCreateStudent from "./hooks/useCreateStudent";

function CreateStudentAccountForm({onClose}) {
    const mutation = useCreateStudent();
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const its = formData.get('its');
        const contactNumber = formData.get('contactNumber');
        const contactEmail = formData.get('contactEmail');
        const address = formData.get('address');
        const batch = formData.get('batch');
        const allocatedHub = formData.get('allocatedHub');
        const role = 'student';
        if(!name || !its || !contactNumber || !contactEmail || !address || !batch || !allocatedHub) return toast.error('please fill all fields!');

        try{
            toast.loading('creating student account...',{id:'acc'});
            await mutation.mutateAsync({name,its,contactEmail,contactNumber,allocatedHub,batch,address,role});
            onClose();
        }catch(err){    
            console.log(err);
        }
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-brightness-80">
        <div className=" w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <BiUserPlus className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Create Account
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Create a new student account and assign their batch and hub
                </p>
              </div>
            </div>

            <button
            onClick={onClose}
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700"
            >
              <FaXmark className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                name="name"
                  type="text"
                  placeholder="Enter student's name"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* ITS */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  ITS <span className="text-red-500">*</span>
                </label>

                <input
                name="its"
                  type="text"
                  placeholder="Enter ITS number"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact Number <span className="text-red-500">*</span>
                </label>

                <div className="flex h-12 overflow-hidden rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
                  {/* <div className="flex items-center border-r border-gray-200 bg-gray-50 px-4 text-sm text-gray-600">
                    +91
                  </div> */}

                  <input
                  name="contactNumber"
                    type="tel"
                    placeholder="Enter contact number"
                    className="w-full px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact Email
                </label>

                <input
                name="contactEmail"
                  type="email"
                  placeholder="Enter email address"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Address <span className="text-red-500">*</span>
                </label>

                <textarea
                name="address"
                  rows={3}
                  placeholder="Enter complete address"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Batch */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Batch <span className="text-red-500">*</span>
                </label>

                <select name="batch" className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50">
                  <option value="">Select batch</option>
                  <option value="yaqoot_mardo">Yaqoot Mardo</option>
                  <option value="yaqoot_bairo">Yaqoot Bairo</option>
                  <option value="kibaar">Kibaar</option>
                  <option value="sigaar">Sigaar</option>
                  <option value="baneen">Baneen</option>
                  <option value="banaat">Banaat</option>
                  <option value="taheri_hall">Taheri Hall</option>
                </select>
              </div>

              {/* Allocated Hub */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Allocated Hub <span className="text-red-500">*</span>
                </label>

                <div className="flex h-12 overflow-hidden rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
                  <div className="flex items-center border-r border-gray-200 bg-gray-50 px-4 text-sm text-gray-600">
                    ₹
                  </div>

                  <input
                  name="allocatedHub"
                    type="number"
                    placeholder="Enter allocated hub"
                    className="w-full px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Enter the total allocated hub for this student
                </p>
              </div>
            </div>
          <div  className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50/50 px-6 py-5">
            <button
            onClick={onClose}
              type="button"
              className="h-12 rounded-xl border border-gray-200 bg-white px-6 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
            // onClick={handleSubmit}
            //   type="submit"
              className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
            >
              <FaUserPlus className="h-4 w-4" />
              Create Account
            </button>
          </div>
          </form>

          {/* Footer */}
        </div>  
      </div>
    );
}

export default CreateStudentAccountForm
