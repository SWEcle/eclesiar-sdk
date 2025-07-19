import { accountsApi } from './api/accounts';
import { countriesApi } from './api/countries';
import { marketApi } from './api/market';
import { serverApi } from './api/server';
import { statisticsApi } from './api/statistics';
import { warsApi } from './api/wars';

import type { AccountsApi } from './api/accounts/types';
import type { CountriesApi } from './api/countries/types';
import type { MarketApi } from './api/market/types';
import type { ServerApi } from './api/server/types';
import type { StatisticsApi } from './api/statistics/types';
import type { WarsApi } from './api/wars/types';

type ApiResponse<T> = {
  code: number;
  description: string;
  data: T;
};

const BASE_URL = 'https://api.eclesiar.com';

let token = '';

export function setToken(newToken: string) {
  token = newToken;
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error(
      `API Error: ${res.status} ${res.statusText} ${endpoint}`
    );
  }

  const json: ApiResponse<T> = await res.json();

  return json.data;
}

export interface SdkClient {
  accounts: AccountsApi;
  countries: CountriesApi;
  market: MarketApi;
  server: ServerApi;
  statistics: StatisticsApi;
  wars: WarsApi;
}

export const apiClient: SdkClient = {
  accounts: accountsApi,
  countries: countriesApi,
  market: marketApi,
  server: serverApi,
  statistics: statisticsApi,
  wars: warsApi,
};
