function HubReportsTableHeader() {
    return (
      <div className="w-full grid grid-cols-14 p-3 text-xs text-gray-700 text-center bg-neutral-50 border-b border-b-gray-200">
        <p className="text-left">#</p>
        <p className="col-span-4 text-left">Student Name</p>
        <p className="text-lef">ITS</p>
        <p className="text-lef col-span-2">batch</p>
        <p className="text-lef">Amount</p>
        <p className="text-lef col-span-2">Date</p>
        <p className="text-lef col-span-3 ">Transaction ID</p>
      </div>
    );
}

export default HubReportsTableHeader
