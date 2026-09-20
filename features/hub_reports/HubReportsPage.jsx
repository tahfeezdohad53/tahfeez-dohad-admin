'use client';

import { useUser } from "@/providers/UserProvider";
import HubReportsFilter from "./components/HubReportsFilter"
import HubReportsTable from "./components/HubReportsTable";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function HubReportsPage() {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user?.isSubAdmin) router.replace("/hub_management");
  },[user,router]);

    if(!user?.isSubAdmin)return (
      <div className="flex-1 px-3 flex flex-col gap-5">
        <HubReportsFilter />

        <HubReportsTable />
      </div>
    );
}

export default HubReportsPage
