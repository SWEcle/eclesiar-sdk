import { apiFetch } from "@/client";
import { WarRound } from "@/types/wars";

type GetWarRoundsParams = {
  war_id: number;
};

export async function getWarRounds({ war_id }: GetWarRoundsParams): Promise<WarRound[]> {
  const query = new URLSearchParams({ war_id: String(war_id) });
  return apiFetch<WarRound[]>(`/war/rounds?${query}`);
} 