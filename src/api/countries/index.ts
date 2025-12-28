import { getCountries } from './getCountries';
import { getCountryRegions } from './getCountryRegions';
import { getCountryTransactions } from './getTransactions';
import type { CountriesApi } from './types';

export const countriesApi: CountriesApi = {
    getCountries,
    getCountryRegions,
    getCountryTransactions,
}
export type { CountriesApi };
export {
    getCountries,
    getCountryRegions,
    getCountryTransactions,
}