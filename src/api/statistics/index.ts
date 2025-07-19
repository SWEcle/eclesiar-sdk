import { getStatistics } from './getStatistics';

import type { StatisticsApi } from './types';

export const statisticsApi: StatisticsApi = {
    getStatistics,
}

export type { StatisticsApi };
export {
    getStatistics,
}