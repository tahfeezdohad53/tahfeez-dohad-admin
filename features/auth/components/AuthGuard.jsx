'use client';

import { useUser } from "@/providers/UserProvider";
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
    if(user?._id || pathname.includes('auth')) return children;
}

export default AuthGuard
