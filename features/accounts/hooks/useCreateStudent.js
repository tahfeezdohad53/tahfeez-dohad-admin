import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleCreateStudent } from "../api/handleCreateStudent"

function useCreateStudent() {
    return useMutation({
        mutationFn:handleCreateStudent,
        onSuccess:() => toast.success('Student created!',{id:'acc'}),
        onError:() => toast.error('Failed to create student account',{id:'acc'}),
    })
}

export default useCreateStudent
