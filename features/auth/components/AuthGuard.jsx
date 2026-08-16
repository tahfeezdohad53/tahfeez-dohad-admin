'use client';

import { useUser } from "@/providers/UserProvider";
import PageHeader from "@/shared/components/PageHeader";
import Sidebar, { SidebarPlaceHolder } from "@/shared/components/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthGuard({children}) {
    const {user,isPending,isFetching} = useUser();
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        if (isPending) return;
        if (
          !user?._id &&
          !isPending &&
          !isFetching &&
          !pathname.includes("auth")
        )
          router.push("/auth");
    },[isPending,isFetching,user,pathname,router])
    if(user?._id || pathname.includes('auth')) return (
      <div className="flex w-full h-full">
        <Sidebar />
        <SidebarPlaceHolder />
        <div className="h-screen flex flex-col w-full py-2">
          <PageHeader />
          {children}
        </div>
      </div>
    );
}

export default AuthGuard
