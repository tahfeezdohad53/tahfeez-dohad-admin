import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

function useSetFilterParams() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const batch = searchParams.get('batch');
        const obligation_status = searchParams.get('obligation_status');
        const urlParams = new URLSearchParams(searchParams);
        
        if(!batch) urlParams.set('batch','all');
        
        if(!obligation_status) urlParams.set('hub_status','all');
        if(!obligation_status) urlParams.set('page','1');

        router.replace(`${pathname}?${urlParams}`,{scroll:false});
        
    },[])
}

export default useSetFilterParams;
