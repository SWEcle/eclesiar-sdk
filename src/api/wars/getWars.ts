import { apiFetch } from "@/client";
import { War } from "@/types/wars";

type GetWarsParams = {
  event_wars?: 0 | 1;
  extra_details?: 0 | 1;
  war_id?: number;
  expired?: number;
  page?: number;
};

export async function getWars({
  event_wars = 0,
  extra_details = 0,
  war_id = 0,
  expired = 0,
  page = 1,
}: GetWarsParams = {}): Promise<War[]> {
  const query = new URLSearchParams({
    event_wars: String(event_wars),
    extra_details: String(extra_details),
    war_id: String(war_id),
    expired: String(expired),
    page: String(page)
  });

  return apiFetch<War[]>(`/wars?${query}`);
}