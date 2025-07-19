import { apiFetch } from "@/client";
import { AccountData } from "@/types/accounts";

export async function getAccount({
   account_id
}: { account_id: number }): Promise<AccountData>{
    const params = new URLSearchParams({ account_id: String(account_id) });
    return apiFetch<AccountData>(`/account?${params.toString()}`)
}   