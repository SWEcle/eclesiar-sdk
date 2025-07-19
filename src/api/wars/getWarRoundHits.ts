import { apiFetch } from "@/client";
import { WarHit } from "@/types/wars";

type GetWarRoundHitsParams = {
  war_round_id: number;
  page?: number;
};

export async function getWarRoundHits({
  war_round_id,
  page = 1,
}: GetWarRoundHitsParams): Promise<WarHit[]> {
  const query = new URLSearchParams({
    war_round_id: String(war_round_id),
    page: String(page),
  });

  return apiFetch<WarHit[]>(`/war/round/hits?${query}`);
}