import { api } from "@/shared/lib/axios";

export async function updateFee({amount,status,id,transactionId}){
    await api.patch('/fee/update',{amount,status,id,transactionId})
}