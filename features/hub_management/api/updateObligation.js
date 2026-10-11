import { api } from "@/shared/lib/axios";
import toast from "react-hot-toast";

export async function updateObligation({amount,status,id,transactionId,dates,batch,allocatedHub,studentId,paidAt}){
    // console.log('studentId: ',studentId);
    
        await api.patch('/hub/update',{amount,status,id,transactionId,dates,batch,allocatedHub,studentId,paidAt})
    
}