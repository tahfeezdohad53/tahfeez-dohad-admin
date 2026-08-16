import FeeTableHeader from "./FeeTableHeader";
import FeeTableRow from "./FeeTableRow";
import FeeTableController from "./FeeTableController";

const feeEntries = [
  {
    name: "Huzefa bhai asgar bhai ratlamwala",
    its: 30907189,
    allocatedFee: 8000,
    feePaid: 4000,
    status: "partial",
  },
  {
    name: "Fakhruddin bhai mohammed bhai charchoda",
    its: 30903828,
    allocatedFee: 8000,
    feePaid: 0,
    status: "pending",
  },
  {
    name: "abbas bhai shoeb bhai chunawala",
    its: 40303815,
    allocatedFee: 3000,
    feePaid: 3000,
    status: "paid",
  },
  {
    name: "husain bhai fakhruddin bhai parawala",
    its: 40203228,
    allocatedFee: 5300,
    feePaid: 0,
    status: "pending",
  },
  {
    name: "Huzefa bhai asgar bhai ratlamwala",
    its: 30907189,
    allocatedFee: 8000,
    feePaid: 4000,
    status: "partial",
  },
  {
    name: "abbas bhai shoeb bhai chunawala",
    its: 40303815,
    allocatedFee: 3000,
    feePaid: 3000,
    status: "paid",
  },
  {
    name: "Fakhruddin bhai mohammed bhai charchoda",
    its: 30903828,
    allocatedFee: 8000,
    feePaid: 0,
    status: "pending",
  },
  {
    name: "abbas bhai shoeb bhai chunawala",
    its: 40303815,
    allocatedFee: 3000,
    feePaid: 3000,
    status: "paid",
  },
  {
    name: "husain bhai fakhruddin bhai parawala",
    its: 40203228,
    allocatedFee: 5300,
    feePaid: 0,
    status: "pending",
  },
  {
    name: "Huzefa bhai asgar bhai ratlamwala",
    its: 30907189,
    allocatedFee: 7000,
    feePaid: 7000,
    status: "paid",
  },
];

function StudentsFeeTable() {
    return (
      <div className="rounded-md overflow-auto border border-gray-200 shadow-(--shadow-sm)">
        <FeeTableHeader />

        {feeEntries.map((el,i) => <FeeTableRow key={el.its+i} i={i + 1} its={el.its} feeAllocated={el.allocatedFee} feePaid={el.feePaid} status={el.status} name={el.name}/>)}

        <FeeTableController />
      </div>
    );
}

export default StudentsFeeTable



