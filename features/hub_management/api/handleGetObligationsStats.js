import { api } from "@/shared/lib/axios";

export async function handleGetObligationStats() {
  try {
    const {
      data: {
        obligationPendingThisMonth,
        obligationPaidThisMonth,
        totalStudents,
        totalObligation: [{ paid, pending }],
      },
    } = await api.get("/hub/stats");

    return {
      obligationPendingThisMonth,
      obligationPaidThisMonth,
      totalStudents,
      paid,
      pending,
    };
  } catch (err) {
    console.log(err);
  }
}
