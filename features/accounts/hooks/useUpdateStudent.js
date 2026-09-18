import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleUpdateStudent } from "../api/handleUpdateStudent";

function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleUpdateStudent,
    onSuccess: () => {
      toast.success("student data updated!");
      queryClient.invalidateQueries({ queryKey: ["obligation"] });
      queryClient.invalidateQueries({ queryKey: ["obligation_stats"] });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: () => toast.error("failed to update student!"),
  });
}

export default useUpdateStudent;
