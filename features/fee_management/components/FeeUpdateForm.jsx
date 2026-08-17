'use client';
import { formatCurrency } from "@/helpers/formatCurrency";
import { formatName } from "@/helpers/formatName";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown, FiCreditCard } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";

function FeeUpdateForm({onClose,name,id,feeAllocated,mutation,status:feeStatus,amountPaid}) {
    const [amount,setAmount] = useState('');
    const [status,setStatus] = useState('');
    const [transactionId,setTransactionId] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        if(!amount || !status || !transactionId) return toast.error('please fill all fields');
        const amountInNumber = Number(amount);
        if(amountInNumber > (feeAllocated - amountPaid)) return toast.error('you cannot pay more than pending amount');
        setIsSubmitting(true);
        await mutation.mutateAsync({id,amount,status,transactionId});
        setIsSubmitting(false);
        onClose();
    }
    return (
      <form onSubmit={handleSubmit} className="px-7 py-6">
        {/* Student */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-3">
            <p className="text-xs font-medium text-gray-500">Student</p>

            <p className="mt-1 text-sm font-semibold text-[#17284a]">
              {formatName(name)}
            </p>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-3">
            <p className="text-xs font-medium text-gray-500">Allocated Fee</p>

            <p className="mt-1 text-sm font-semibold text-[#17284a]">
              {formatCurrency().format(feeAllocated)}
            </p>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-3">
            <p className="text-xs font-medium text-gray-500">Status</p>

            <p className="mt-1 text-sm font-semibold text-[#17284a]">
              {feeStatus}
            </p>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-3">
            <p className="text-xs font-medium text-gray-500">Amount pending</p>

            <p className="mt-1 text-sm font-semibold text-[#17284a]">
              {feeAllocated - amountPaid}
            </p>
          </div>
        </div>

        {/* Transaction ID */}
        <div className="mb-5">
          <label className="mb-2 text-left block text-sm font-semibold text-[#17284a]">
            Transaction ID
          </label>

          <input
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            type="text"
            placeholder="Enter transaction ID"
            className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-2 text-left text-xs text-gray-500">
            Enter the transaction/reference ID
          </p>
        </div>

        {/* Amount */}
        <div className="mb-5">
          <label className="mb-2 text-left block text-sm font-semibold text-[#17284a]">
            Amount
          </label>

          <div className="flex h-11 overflow-hidden rounded-lg border border-gray-300 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <div className="flex w-11 items-center justify-center border-r border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
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

          <p className="mt-2 text-left text-xs text-gray-500">
            Enter the amount received
          </p>
        </div>

        {/* Status */}
        <div className="mb-7">
          <label className="mb-2 text-left block text-sm font-semibold text-[#17284a]">
            Status
          </label>

          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select payment status
              </option>
              <option value="partial">Partial</option>
              <option value="paid">Paid</option>
            </select>

            <FiChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <p className="mt-2 text-left text-xs text-gray-500">
            Choose whether the payment is partial or paid
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
          disabled={isSubmitting}
            type="submit"
            className="relative flex h-11 items-center gap-2 rounded-lg bg-blue-600 disabled:bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <p className={` flex items-center gap-2 ${isSubmitting ? 'opacity-0':'opacity-100'}`}>
              <FiCreditCard size={17} />
              Record Payment
            </p>
            {isSubmitting && <ImSpinner2 className="animate-spin absolute left-1/2 top-1/2 -translate-1/2"/>}
          </button>
        </div>
      </form>
    );
}

export default FeeUpdateForm
