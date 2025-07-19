import { apiFetch } from "@/client";
import { Region } from "@/types/country";

type GetCountryRegionsParams = {
    country_id: number;
};

export async function getCountryRegions({
    country_id
}: GetCountryRegionsParams): Promise<Region[]>{
    const params = new URLSearchParams({ country_id: String(country_id) });
    return apiFetch<Region[]>(`/country/regions?${params.toString()}`)
}   