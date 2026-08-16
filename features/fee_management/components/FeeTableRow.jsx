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
export default function FeeTableRow({ name, its, feeAllocated, feePaid, status, i }) {
  const currency = Intl.NumberFormat(navigator.languages, {
    currency: "inr",
    style: "currency",
  });

  let style;
  if (status === "paid") style = "bg-green-100 text-green-600";
  if (status === "partial") style = "bg-orange-100 text-orange-600";
  if (status === "pending") style = "bg-red-100 text-red-600";
  return (
    <div className="w-full grid grid-cols-9 p-3 text-xs text-center bg-(--surface) border-b border-b-gray-100">
      <p className=" text-left">{i}</p>
      <h1 className="flex items-center gap-2 col-span-3 text-left font-bold">
        <p
          className={`${randomColors[i]} rounded-full flex items-center justify-center h-7 w-7`}
        >
          {name.slice(0, 1).toUpperCase()}
        </p>{" "}
        {name}
      </h1>
      <p>{its}</p>
      <p>{currency.format(feeAllocated)}</p>
      <p>{currency.format(feePaid)}</p>
      <p
        className={`${style} font-semibold w-fit mx-auto py-1 px-3 rounded-xl`}
      >
        {status}
      </p>
      <p className="col-span-">actions</p>
    </div>
  );
}
