import HubReportsFilter from "./components/HubReportsFilter"
import HubReportsTable from "./components/HubReportsTable";

function HubReportsPage() {
  return (
      <div className="fixed left-65 top-0 h-screen w-3/4 flex items-center justify-center text-lg ">Access denied!</div>

  );

    return (
      <div className="flex-1 px-3 flex flex-col gap-5">
        <HubReportsFilter />

        <HubReportsTable />
      </div>
    );
}

export default HubReportsPage
