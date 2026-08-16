import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

function useSetFilterParams() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const batch = searchParams.get('batch');
        const fee_status = searchParams.get('fee_status');
        const urlParams = new URLSearchParams(searchParams);
        
        if(!batch) urlParams.set('batch','all');
        
        if(!fee_status) urlParams.set('fee_status','all');
        if(!fee_status) urlParams.set('page','1');

        router.replace(`${pathname}?${urlParams}`,{scroll:false});
        
    },[])
}

export default useSetFilterParams
