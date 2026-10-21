'use client';

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import useHubReports from "../hooks/useHubReceipts";
import HubReportsTableController from "./HubReceiptsTableController";
import HubReportsTableHeader from "./HubReceiptsTableHeader";
import HubReportsTableRow from "./HubReceiptsTableRow";
import { useUser } from "@/providers/UserProvider";

function HubReportsTable() {
    const {data} = useHubReports();
    const {user} = useUser();
    return (
      <div className="rounded-md overflow-auto border border-gray-200 shadow-(--shadow-sm)">
        <HubReportsTableHeader />

        

        {data?.hubReports?.map((el, i) => (
          <HubReportsTableRow
          i={i}
            key={el._id}
            receiptId={el._id}
            student={el.student}
            batch={el.batch}
            amountPaid={el.amountPaid}
            date={el.paidAt}
            transaction_id={el.transaction_id}
            emailStatus={el?.emailStatus}
            emailErrorMessage={el?.emailErrorMessage}
            user={user}
          />
        ))}

        {data?.hubReportsCount > 0 && <HubReportsTableController count={data?.hubReportsCount}/>}
      </div>
    );
}

export default HubReportsTable
