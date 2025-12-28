import { Nation, Region } from "@/types";

export interface CountriesApi {
    getCountries(): Promise<Nation[]>;
    getCountryRegions({ country_id }: { country_id: number }): Promise<Region[]>;
    getCountryTransactions({ country_id, page }: { country_id: number, page?: number }): Promise<Region[]>;
}