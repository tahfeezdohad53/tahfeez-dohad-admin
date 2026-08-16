'use client';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateFee } from "../api/updateFee"
import toast from "react-hot-toast"

function useUpdateFee() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn:updateFee,
        onSuccess:() => {
            toast.success('fee entry updated');
            queryClient.invalidateQueries({ queryKey: ["fee"] });
            queryClient.invalidateQueries({ queryKey: ["fee_stats"] });
        },
        onError:() => {
            toast.error('failed to update fee data');
        }
    })
    return mutation;
}

export default useUpdateFee
