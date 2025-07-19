import { apiFetch } from "@/client";
import { Nation } from "@/types/country";

export async function getCountries(
): Promise<Nation[]>{
    return apiFetch<Nation[]>(`/countries`)
}