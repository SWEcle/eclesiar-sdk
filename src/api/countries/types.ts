import { Nation, Region } from "@/types";

export interface CountriesApi {
    getCountries(): Promise<Nation[]>;
    getCountryRegions({ country_id }: { country_id: number }): Promise<Region[]>;
}