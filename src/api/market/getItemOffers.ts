import { apiFetch } from '@/client';
import { MarketItemOffer } from '@/types/market';

export async function getItemOffers({
  country_id,
  item_id,
  page = 1,
}: {
  country_id: number;
  item_id: number;
  page?: number;
}): Promise<MarketItemOffer[]> {
  const query = new URLSearchParams({
    country_id: String(country_id),
    item_id: String(item_id),
    page: String(page),
  });

  return apiFetch<MarketItemOffer[]>(`/market/items/get?${query}`);
}