import { api } from "@/shared/lib/axios";

export async function handleUpdateStudentsBatch({obligations,batch}){
    await api.patch('/student/updateBatch',{obligations,batch});
}