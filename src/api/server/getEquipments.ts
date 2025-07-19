import { apiFetch } from "@/client";
import { ServerEquipment } from "@/types/server";

export async function getServerEquipments(
  { page = 1 }: { page?: number } = {}
): Promise<ServerEquipment[]> {
  const params = new URLSearchParams({ page: String(page) });
return apiFetch<ServerEquipment[]>(`/server/equipments?${params}`);
} 