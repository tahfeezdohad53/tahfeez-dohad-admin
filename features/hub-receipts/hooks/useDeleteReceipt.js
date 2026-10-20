import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleDeleteReceipt } from "../api/handleDeleteReceipt";

function useDeleteReceipt() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:handleDeleteReceipt,
        onSuccess:() => {
            toast.success("receipt deleted",{id:'receipt'});
            queryClient.invalidateQueries(['receipts']);
        },
        onError:() => {
            toast.error('failed to delete receipt',{id:'receipt'});
        }
    })
}

export default useDeleteReceipt
