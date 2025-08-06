import { apiFetch } from "@/client";
import { GetWarsParams, War } from "@/types/wars";



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