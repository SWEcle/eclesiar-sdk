import { getCoinOffers } from './getCoinOffers';
import { getItemOffers } from './getItemOffers';
import { getJobs } from './getJobs';
import { getAuctions } from './getAuctions';
import { getAuctionBid } from './getAuctionBid';

import type { MarketApi } from './types';

export const marketApi: MarketApi = {
    getCoinOffers,
    getItemOffers,
    getJobs,
    getAuctions,
    getAuctionBid,
}
export type { MarketApi };
export {
    getCoinOffers,
    getItemOffers,
    getJobs,
    getAuctions,
    getAuctionBid,
}
