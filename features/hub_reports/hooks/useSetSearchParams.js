import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function useSetSearchParams() {
    const searchParams = useSearchParams();
            const pathname = usePathname();
            const router = useRouter();
    useEffect(() => {
      const url = new URLSearchParams(searchParams);

      if (!searchParams.get("page")) url.set("page", "1");
      if (!searchParams.get("batch")) url.set("batch", "all");

      router.replace(`${pathname}?${url}`, { scroll: false });
    }, []);
}

export default useSetSearchParams
