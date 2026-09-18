'use client';
import FeeManagementFilters from "./components/ObligationManagementFilters"
import StatsCards from "./components/StatsCard"
import StudentsFeeTable from "./components/StudentsObligationTable"
import useFeeStats from "./hooks/useObligationStats";
import useGetObligations from "./hooks/useGetObligations";
import useObligationStats from "./hooks/useObligationStats";

function HubManagementPage() {
  const {obligations,count} = useGetObligations();
  const {
    obligationPendingThisMonth,
    obligationPaidThisMonth,
    totalStudents,
    paid,
    pending,
  } = useObligationStats();

    return (
      <div className="flex-1 px-3 flex flex-col gap-5">
        <StatsCards
          feePendingThisMonth={obligationPendingThisMonth}
          feePaidThisMonth={obligationPaidThisMonth}
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

export default HubManagementPage
