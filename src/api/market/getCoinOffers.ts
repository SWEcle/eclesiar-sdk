import { apiFetch } from '@/client';
import { MarketCoinOffer } from '@/types/market';

export async function getCoinOffers({
  currency_id,
  transaction = 'BUY',
  page = 1,
}: {
  currency_id: number;
  transaction?: 'BUY' | 'SELL';
  page?: number;
}): Promise<MarketCoinOffer[]> {
  const query = new URLSearchParams({
    currency_id: String(currency_id),
    transaction: String(transaction),
    page: String(page),
  });

  return apiFetch<MarketCoinOffer[]>(`/market/coin/get?${query}`);
}