'use client';

import { api } from "@/shared/lib/axios";
import { useSearchParams } from "next/navigation";
import { FiDownload } from "react-icons/fi";

function HubReportsExportButton() {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const batch = searchParams.get("batch");
    const its = searchParams.get("its");
    async function downloadExcel(){
        console.log('hello')
        try{
            const { data } = await api.get("/hub/reports/excel", {
              params: {
                page: page || "",
                from: from || "",
                to: to || "",
                batch: batch || "",
                its: its || "",
              },
              responseType:'blob'
            });
            const url = window.URL.createObjectURL(data);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'hub_reports';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }catch(err){
            console.log(err);
        }
    }
    return (
      <button
      onClick={downloadExcel}
        type="button"
        className="flex h-fit self-end py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-blue-600 px-6 text-xs font-medium text-white transition hover:bg-blue-700"
      >
        <FiDownload className="" />
        <span>Export</span>
      </button>
    );
}

export default HubReportsExportButton
