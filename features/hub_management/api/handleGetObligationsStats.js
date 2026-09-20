import { api } from "@/shared/lib/axios";

export async function handleGetObligationStats() {
  try {
    const {data} = await api.get("/hub/stats");

    return data;
  } catch (err) {
    console.log(err);
  }
}
