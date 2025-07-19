import { MarketAuction, MarketAuctionBid, MarketCoinOffer, MarketItemOffer, MarketJobOffer } from "@/types";

export interface MarketApi {
    getCoinOffers({ currency_id, transaction, page }: { currency_id: number, transaction: 'BUY' | 'SELL', page?: number }): Promise<MarketCoinOffer[]>;
    getItemOffers({ country_id, item_id, page }: { country_id: number, item_id: number, page?: number }): Promise<MarketItemOffer[]>;
    getJobs({ country_id, page }: { country_id: number, page?: number }): Promise<MarketJobOffer[]>;
    getAuctions({ finished, page }: { finished?: 0 | 1, page?: number }): Promise<MarketAuction[]>;
    getAuctionBid({ auction_id, page }: { auction_id: number, page?: number }): Promise<MarketAuctionBid[]>;
}