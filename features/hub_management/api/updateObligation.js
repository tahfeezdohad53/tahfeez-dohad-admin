import { api } from "@/shared/lib/axios";

export async function updateObligation({amount,status,id,transactionId,dates,batch,allocatedHub,studentId}){
    await api.patch('/hub/update',{amount,status,id,transactionId,dates,batch,allocatedHub,studentId})
}