import { apiFetch } from "@/client";
import { MarketAuctionBid } from "@/types/market";

export async function getAuctionBid({
  auction_id,
  page = 1,
}: { auction_id: number; page?: number }): Promise<MarketAuctionBid[]> {
  const params = new URLSearchParams({
    auction_id: String(auction_id),
    page: String(page),
  });

  return apiFetch<MarketAuctionBid[]>(`/market/auction/bids/get?${params.toString()}`);
}