import { apiFetch } from "@/client";
import { CountryStatisticType, RankingItem } from "@/types/statistics";

type GetStatisticsParams = {
  statistic: CountryStatisticType;
};

export async function getStatistics({
  statistic,
}: GetStatisticsParams): Promise<RankingItem[]> {
  const query = new URLSearchParams({ statistic });

  return apiFetch<RankingItem[]>(`/statistics/country?${query}`);
}