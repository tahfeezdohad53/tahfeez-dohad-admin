import { api } from "@/shared/lib/axios";
import toast from "react-hot-toast";

export async function handleLogin(email,password){
    if(!email || !password) return toast.error('please enter email and password');
    try{
        const { data } = await api.post("/auth/emailSignin",{email,password,role:'admin'});
        
    }catch(err){
        toast.error('failed to log in');
        throw err;
    }
}