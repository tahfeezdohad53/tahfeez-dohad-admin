import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleUpdateStudentsBulk } from "../api/handleUpdateStudentsBulk";

function useUpdateStudentsBulk() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn:handleUpdateStudentsBulk,
      onSuccess: () => {
        toast.success("student data updated!");
        queryClient.invalidateQueries({ queryKey: ["obligation"] });
        queryClient.invalidateQueries({ queryKey: ["obligation_stats"] });
        queryClient.invalidateQueries({ queryKey: ["accounts"] });
      },
      onError: () => toast.error("failed to update student!"),
    });
}

export default useUpdateStudentsBulk;
