import { apiFetch } from "@/client";
import { MarketJobOffer } from "@/types/market";

type GetJobsParams = {
  country_id: number;
  page?: number;
};

export async function getJobs({
  country_id,
  page = 1,
}: GetJobsParams): Promise<MarketJobOffer[]> {
  const query = new URLSearchParams({
    country_id: String(country_id),
    page: String(page),
  });

  return apiFetch<MarketJobOffer[]>(`/market/jobs/get?${query}`);
}   