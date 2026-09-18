'use client';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {  updateObligation } from "../api/updateObligation"
import toast from "react-hot-toast"

function useUpdateObligation() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn:updateObligation,
        onSuccess:() => {
            toast.success('Data updated!');
            queryClient.invalidateQueries({ queryKey: ["obligation"] });
            queryClient.invalidateQueries({ queryKey: ["obligation_stats"] });
        },
        onError:() => {
            toast.error('failed to update fee data');
        }
    })
    return mutation;
}

export default useUpdateObligation
