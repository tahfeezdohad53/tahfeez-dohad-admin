import { api } from "@/shared/lib/axios";

export async function handleGetFeeStats(){
    try{
        const {
          data: { feePendingThisMonth, feePaidThisMonth, totalStudents,totalFee:[{paid,pending}] },
        } = await api.get("/fee/stats");
        return {feePendingThisMonth,feePaidThisMonth,totalStudents,paid,pending}
    }catch(err){
        console.log(err);
    }
}