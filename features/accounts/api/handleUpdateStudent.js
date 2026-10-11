import { api } from "@/shared/lib/axios";

export async function handleUpdateStudent({studentId,allocatedHub,batch,contactEmail,address,contactNumber}){
    await api.patch(`/student/update/${studentId}`,{allocatedHub,batch,contactEmail,address,contactNumber});
}