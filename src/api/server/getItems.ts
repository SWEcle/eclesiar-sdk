import { apiFetch } from "@/client";
import { ServerItem } from "@/types/server";

export async function getServerItems(
  { page = 1 }: { page?: number } = {}
): Promise<ServerItem[]> {
  const params = new URLSearchParams({ page: String(page) });
return apiFetch<ServerItem[]>(`/server/items?${params}`);
}
