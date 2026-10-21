import { api } from "@/shared/lib/axios";

export async function handleGetAccounts({page,batch,ITS,isActive}) {
  const { data } = await api.get(
    `/user/getAccounts?page=${page || ''}&batch=${batch || ''}&ITS=${ITS || ''}&role=student&isActive=${isActive}`,
  );
  return data;
}
