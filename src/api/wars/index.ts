import { getWars } from './getWars';
import { getWarRounds } from './getWarRounds';
import { getWarRoundHits } from './getWarRoundHits';

import type { WarsApi } from './types';

export const warsApi: WarsApi = {
    getWars,
    getWarRounds,
    getWarRoundHits,
}

export type { WarsApi };
export {
    getWars,
    getWarRounds,
    getWarRoundHits,
}