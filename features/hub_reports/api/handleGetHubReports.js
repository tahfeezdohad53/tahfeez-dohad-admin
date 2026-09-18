import { api } from "@/shared/lib/axios";

export async function handleGetHubReports({page,from,to,batch,its}){
   if(!page) return [];
    const {data} = await api.get("/hub/reports", {
      params: {
        page: page || "",
        from: from || "",
        to: to || "",
        batch: batch || "",
        its: its || "",
      },
    });
    console.log(data);
    return data;
}