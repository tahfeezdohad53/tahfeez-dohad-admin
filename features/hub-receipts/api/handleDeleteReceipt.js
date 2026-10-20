import { api } from "@/shared/lib/axios";

export async function handleDeleteReceipt({id}){
    await api.delete(`/hub/receipts/${id}`);
}