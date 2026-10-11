import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleDeleteStudent } from "../api/handleDeleteStudent";

function useDeleteStudent() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:handleDeleteStudent,
        onSuccess:() => {
            queryClient.invalidateQueries(['accounts']);
            toast.success('student deleted');

        },
        onError:() => {
            toast.error('failed to delete student');
        }
    })
}

export default useDeleteStudent
