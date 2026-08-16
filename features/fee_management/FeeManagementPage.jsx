'use client';
import FeeManagementFilters from "./components/FeeManagementFilters"
import StatsCards from "./components/StatsCard"
import StudentsFeeTable from "./components/StudentsFeeTable"
import useFeeStats from "./hooks/useFeeStats";
import useGetFeeObligations from "./hooks/useGetFeeObligations";

function FeeManagementPage() {
  const {obligations,count} = useGetFeeObligations();
  const { feePendingThisMonth, feePaidThisMonth, totalStudents,paid,pending } = useFeeStats();
    return (
      <div className="flex-1 px-3 flex flex-col gap-5">
        <StatsCards
          feePendingThisMonth={feePendingThisMonth}
          feePaidThisMonth={feePaidThisMonth}
          totalStudents={totalStudents}
          totalFeePaid={paid}
        />

        <FeeManagementFilters />

        <div className="h-full">
          <StudentsFeeTable obligations={obligations} count={count} />
        </div>
      </div>
    );
}

export default FeeManagementPage
