import { api } from "@/shared/lib/axios";
import toast from "react-hot-toast";

export async function handleGetFeeObligations(params){
    try{
        const {data} = await api.get(`/hub/get`,{params});
        console.log(data)
        return {obligations:data.obligations,count:data.count};
    }catch(err){
        console.log(err);
        toast.error('failed to fetch fee data, please login ');
        return {obligations:[],count:0}
    }
}