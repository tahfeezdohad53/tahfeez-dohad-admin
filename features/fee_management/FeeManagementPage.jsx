import FeeManagementFilters from "./components/FeeManagementFilters"
import StatsCards from "./components/StatsCard"
import StudentsFeeTable from "./components/StudentsFeeTable"

function FeeManagementPage() {
    return (
      <div className="flex-1 px-3 flex flex-col gap-5">
        <StatsCards />

        <FeeManagementFilters />

        <div className="h-full">
          <StudentsFeeTable />
        </div>
      </div>
    );
}

export default FeeManagementPage
