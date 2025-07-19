export interface ApiResponse<T> {
  code: number;
  description: string;
  data: T;
}

export interface MarketCoinOffer {
  id: number;
  currency_id: number;
  amount: number;
  price: number;
  owner: {
    id: number;
    type: string;
  };
}

export interface MarketItemOffer {
  id: number;
  item_id: number;
  amount: number;
  price: number;
  owner: {
    id: number;
    type: string;
  };
}

export interface MarketJobOffer {
  value: number;
  amount: number;
  economic_skill: number;
  currency_id: number;
  business_id: number;
}

export interface MarketAuction {
  id: number;
  item: {
    id: number;
    type: string;
  };
  owner: {
    id: number;
    type: string;
  };
  initial_bid: number;
  created_at: string;
  end_at: string;
  status: number;
}

export interface MarketAuctionBid {
  id: number;
  bid: number;
  created_at: string;
  owner: {
    id: number;
    type: string;
  };
}