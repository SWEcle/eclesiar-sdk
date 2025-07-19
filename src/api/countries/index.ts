import { getCountries } from './getCountries';
import { getCountryRegions } from './getCountryRegions';

import type { CountriesApi } from './types';

export const countriesApi: CountriesApi = {
    getCountries,
    getCountryRegions,
}
export type { CountriesApi };
export {
    getCountries,
    getCountryRegions,
}