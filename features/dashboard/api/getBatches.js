import { api } from "@/shared/lib/axios";

export default async function getBatches(){
    const {data} = await api.get('/dashboard/batches-count');
    return data.batches;
}