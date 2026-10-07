import { api } from "@/shared/lib/axios";

export async function handleCreateStudent({name,its,contactEmail,contactNumber,address,batch,allocatedHub,role}){
    await api.post("/user/create", {
      name,
      its,
      contactEmail,
      contactNumber,
      address,
      batch,
      allocatedHub,
      role,
    });
}