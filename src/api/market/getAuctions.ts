import { apiFetch } from "@/client";
import { MarketAuction } from "@/types/market";

export async function getAuctions({
  finished = 0,
  page = 1,
}: { finished?: 0 | 1; page?: number } = {}): Promise<MarketAuction[]> {
  const params = new URLSearchParams({
    finished: finished.toString(),
    page: page.toString(),
  });
  return apiFetch<MarketAuction[]>(`/market/auctions/get?${params.toString()}`);
}
