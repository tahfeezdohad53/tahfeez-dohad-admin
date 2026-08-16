function FeeTableHeader() {
    return (
      <div className="w-full grid grid-cols-9 p-3 text-xs text-gray-700 text-center bg-neutral-50 border-b border-b-gray-200">
        <p className="text-left">#</p>
        <p className="col-span-3 text-left">Student Name</p>
        <p>ITS</p>
        <p>Allocated Fee</p>
        <p>paid (this term)</p>
        <p>status</p>
        <p className="col-span-">Action</p>
      </div>
    );
}

export default FeeTableHeader
