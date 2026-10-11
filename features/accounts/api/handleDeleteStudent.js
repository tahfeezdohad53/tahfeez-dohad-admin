import { api } from "@/shared/lib/axios";

export async function handleDeleteStudent({studentId}){
    await api.delete(`/user/delete/${studentId}`);
}