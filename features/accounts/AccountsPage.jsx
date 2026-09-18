import AccountFilters from "./AccountsFilter";
import AccountsTable from "./AccountsTable";

function AccountsPage() {
    return (
      <div className="w-full  p-2 flex flex-col gap-3">
        <AccountFilters />
        <AccountsTable />
      </div>
    );
}

export default AccountsPage
