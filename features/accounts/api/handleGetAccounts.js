import { api } from "@/shared/lib/axios";

export async function handleGetAccounts({page,batch,role}) {
  const { data } = await api.get(
    `/user/getAccounts?page=${page || ''}&batch=${batch || ''}&role=${role || ''}`,
  );
  return data;
}
