import { apiFetch } from "@/client";
import { Region } from "@/types/country";

type GetCountryTransactions = {
    country_id: number;
    page?: number
};

export async function getCountryTransactions({
    country_id,
    page = 1
}: GetCountryTransactions): Promise<Region[]>{
    const params = new URLSearchParams({ country_id: String(country_id) });
    return apiFetch<Region[]>(`/country/currency-transactions?${params.toString()}`)
}