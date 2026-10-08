import { api } from "@/shared/lib/axios";
import { useSearchParams } from "next/navigation";
import { FiDownload } from "react-icons/fi";

function HubReceiptsExcelDownloadButton() {
  const searchParams = useSearchParams();
  const batch = searchParams.get('batch');
  const its = searchParams.get('its');
  
  async function downloadExcel(){
    console.log('hello')
    try{
      const {data} = await api.get(`/hub/receipts/excel?batch=${batch}&its=${its}`,{responseType:'blob'});
      
      const url = window.URL.createObjectURL(data);

      const a = document.createElement('a');
      document.documentElement.appendChild(a);
      a.href = url;
      a.download = 'hub_receipts';
      a.click();

      window.URL.revokeObjectURL(url);
      document.removeChild(a);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <button
    onClick={downloadExcel}
      type="button"
      className="flex py-3 items-center gap-3 rounded-md shadow-(--shadow-sm) bg-blue-600 px-6 text-xs font-medium text-white transition hover:bg-blue-700"
    >
      <FiDownload className="" />
      <span>Export</span>
    </button>
  );
}

export default HubReceiptsExcelDownloadButton;
