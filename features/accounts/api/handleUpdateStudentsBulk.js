import { api } from "@/shared/lib/axios";

export async function handleUpdateStudentsBulk({ students, allocatedHub, batch }) {
  await api.patch(`/student/update/bulk`, {students, allocatedHub, batch });
}