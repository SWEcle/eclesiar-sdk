import { apiFetch } from "@/client";
import { EquipmentItem } from "@/types/accounts";

export async function getMyEquipment({
   page = 1
}: { page?: number } = {}): Promise<EquipmentItem[]>{
    const params = new URLSearchParams({ page: String(page) });
    return apiFetch<EquipmentItem[]>(`/account/mine/equipments?${params.toString()}`)
}