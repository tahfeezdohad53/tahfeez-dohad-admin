'use client';
import { formatCurrency } from "@/helpers/formatCurrency";
import { formatName } from "@/helpers/formatName";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown, FiCreditCard } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import {
  FiUser,
  FiAlertCircle,
  FiHash,
  FiCalendar,
} from "react-icons/fi";
function ObligationUpdateForm({onClose,name,id,allocatedHub,mutation,status:feeStatus,amountPaid}) {
    const [amount,setAmount] = useState('');
    const [status,setStatus] = useState('');
    const [transactionId,setTransactionId] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [selectedMonths,setSelectedMonths] = useState([]);
    async function handleSubmit(e){
        e.preventDefault();
        if(!amount || !status || !transactionId || !selectedMonths.length) return toast.error('please fill all fields');
        const date = new Date();

        const dates = selectedMonths.map(el => {
          return `${date.getFullYear()}-${String(el).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}T${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}+05:30`
        })
      
        const amountInNumber = Number(amount);
        if(amountInNumber > (allocatedHub - amountPaid)) return toast.error('you cannot pay more than pending amount');
        setIsSubmitting(true);
        await mutation.mutateAsync({id,amount,status,transactionId,dates});
        setIsSubmitting(false);
        onClose();
    }
    return (
      <form onSubmit={handleSubmit} className="px-7 py-5 h-[95%] overflow-auto ">
        {/* Header */}
        <div>
          <h2 className="text-[25px] font-bold tracking-tight text-[#142653]">
            Record Payment
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Enter payment details to record the Hub transaction.
          </p>
        </div>

        <div className="mt-5 h-px bg-gray-200" />

        {/* Student Fee Information */}
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Student */}
          <div className="flex items-center gap-3 rounded-lg border border-[#d8e4f5] bg-[#f8fbff] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7edff]">
              <FiUser size={19} className="text-[#1745d1]" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-[#536078]">Student Name</p>

              <p className="mt-0.5 truncate text-base font-bold text-[#102452]">
                {formatName(name)}
              </p>
            </div>
          </div>

          {/* Allocated Fee */}
          <div className="flex items-center gap-3 rounded-lg border border-[#d8e4f5] bg-[#f8fbff] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ddf8ef]">
              <FiCreditCard size={19} className="text-[#009d71]" />
            </div>

            <div>
              <p className="text-xs font-medium text-[#536078]">
                Hub Allocated
              </p>

              <p className="mt-0.5 text-base font-bold text-[#008b65]">
                {formatCurrency().format(allocatedHub)}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 rounded-lg border border-[#d8e4f5] bg-[#f8fbff] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0d9]">
              <FiAlertCircle size={19} className="text-[#e87500]" />
            </div>

            <div>
              <p className="text-xs font-medium text-[#536078]">Status</p>

              <span className="mt-1 inline-flex rounded-md bg-[#fff0df] px-2.5 py-0.5 text-xs font-semibold text-[#e66d00]">
                {feeStatus}
              </span>
            </div>
          </div>

          {/* Amount Pending */}
          <div className="flex items-center gap-3 rounded-lg border border-[#d8e4f5] bg-[#f8fbff] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffe5e8]">
              <span className="text-base font-semibold text-[#dc2938]">₹</span>
            </div>

            <div>
              <p className="text-xs font-medium text-[#536078]">
                Amount Pending
              </p>

              <p className="mt-0.5 text-base font-bold text-[#dc2938]">
                {formatCurrency().format(allocatedHub - amountPaid)}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-[#142653]">Payment Details</h3>

          <div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
            {/* Transaction ID */}
            <div>
              <label className="mb-1.5 block text-left text-sm font-semibold text-[#17284a]">
                Transaction ID
              </label>

              <div className="relative">
                <FiHash
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  type="text"
                  placeholder="Enter transaction ID"
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="mb-1.5 block text-left text-sm font-semibold text-[#17284a]">
                Amount
              </label>

              <div className="flex h-11 overflow-hidden rounded-lg border border-gray-300 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <div className="flex w-10 shrink-0 items-center justify-center bg-gray-50 text-sm font-semibold text-gray-500">
                  ₹
                </div>

                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  min="0"
                  placeholder="Enter amount"
                  className="min-w-0 flex-1 px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="mb-1.5 block text-left text-sm font-semibold text-[#17284a]">
                Status
              </label>

              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select payment status
                  </option>

                  <option value="partial">Partial</option>

                  <option value="paid">Paid</option>
                </select>

                <FiChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Months */}
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-left text-sm font-semibold text-[#17284a]">
                Months <span className="text-xs text-gray-600">({new Date().getFullYear()})</span>
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {[
                  { label: "January", value: 1 },
                  { label: "February", value: 2 },
                  { label: "March", value: 3 },
                  { label: "April", value: 4 },
                  { label: "May", value: 5 },
                  { label: "June", value: 6 },
                  { label: "July", value: 7 },
                  { label: "August", value: 8 },
                  { label: "September", value: 9 },
                  { label: "October", value: 10 },
                  { label: "November", value: 11 },
                  { label: "December", value: 12 },
                ].map((month) => (
                  <label
                    key={month.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                      selectedMonths.includes(month.value)
                        ? "border-blue-400 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={month.value}
                      checked={selectedMonths.includes(month.value)}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        setSelectedMonths((prev) =>
                          e.target.checked
                            ? [...prev, value]
                            : prev.filter((month) => month !== value),
                        );
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    <span>{month.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gray-200" />

        {/* Buttons */}
        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            disabled={isSubmitting}
            type="submit"
            className="relative flex h-10 min-w-[170px] items-center justify-center rounded-lg bg-[#203db2] px-5 text-sm font-semibold text-white transition hover:bg-[#19349c] disabled:bg-[#203db2]"
          >
            <span
              className={`flex items-center gap-2 ${
                isSubmitting ? "opacity-0" : "opacity-100"
              }`}
            >
              <FiCreditCard size={17} />
              Record Payment
            </span>

            {isSubmitting && (
              <ImSpinner2
                size={17}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
              />
            )}
          </button>
        </div>
      </form>
    );
}

export default ObligationUpdateForm
