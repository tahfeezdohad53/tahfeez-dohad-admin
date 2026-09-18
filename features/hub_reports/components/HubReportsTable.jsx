'use client';

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import useHubReports from "../hooks/useHubReports";
import HubReportsTableController from "./HubReportsTableController";
import HubReportsTableHeader from "./HubReportsTableHeader";
import HubReportsTableRow from "./HubReportsTableRow";

function HubReportsTable() {
    const {data} = useHubReports();

    return (
      <div className="rounded-md overflow-auto border border-gray-200 shadow-(--shadow-sm)">
        <HubReportsTableHeader />

        

        {data?.hubReports?.map((el, i) => (
          <HubReportsTableRow
          i={i}
            key={el._id}
            student={el.student}
            batch={el.batch}
            amountPaid={el.amountPaid}
            date={el.date}
            transaction_id={el.transaction_id}
          />
        ))}

        {data?.hubReportsCount > 0 && <HubReportsTableController count={data?.hubReportsCount}/>}
      </div>
    );
}

export default HubReportsTable
