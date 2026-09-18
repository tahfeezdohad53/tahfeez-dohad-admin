import { api } from "@/shared/lib/axios";

export async function handleUpdateStudent({studentId,allocatedHub,batch}){
    await api.patch(`/student/update/${studentId}`,{allocatedHub,batch});
}