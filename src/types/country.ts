export type Currency = {
    id: number;
    name: string;
    symbol: string; 
  }
  
  export type Nation = {
    id: number;
    name: string;
    avatar: string;
    currency: Currency;
    is_availible: boolean;
  }

  export interface RegionBonus {
    type: string; 
    value: number;
  }
  
  export type RegionFactories = {
    food: number;
    weapon: number;
    oil: number;
    grain: number;
    iron: number;
    aircraft: number;
    titanium: number;
    tickets: number;
  }
  
  export type Region = {
    id: number;
    name: string;
    type: number;
    population: number;
    original_country_id: number;
    country_id: number;
    nb_npcs: number;
    pollution: number;
    factories: RegionFactories;
    bonus: RegionBonus[];
  }

  // Shared entity references
type EntityType = "country" | "account" | "holding" | "npc"

interface Entity {
  id: number;
  type: EntityType;
  name?: string;
  avatar?: string;
}

// Pagination
interface Pagination {
  current_page: number;
  total_pages: number;
  per_page: number;
  total_records: number;
}

// Item logs
interface ItemLog {
  id: number;
  item_id: number;
  quantity: number;
  from: Entity;
  to: Entity;
  description: string;
  created_at: string;
}

interface CurrencyLog {
  id: number;
  from: Entity;
  to: Entity;
  currency_id: number;
  value: number;
  created_at: string;
}

interface StockLog {
  id: number;
  from: Entity;
  to: Entity;
  stock_id: number;
  quantity: number;
  created_at: string;
}

interface ComplexTransaction {
  id: number;
  from: Entity;
  to: Entity;
  created_at: string;
  item_logs: ItemLog[];
  currency_logs: CurrencyLog[];
  stock_logs: StockLog[];
}

interface TransactionLog {
  id: number;
  from: Entity;
  to: Entity;
  currency_id: number;
  value: number;
  description: string;
  created_at: string;
  complex_transactions: ComplexTransaction[];
}

interface TransactionLogResponse {
  code: number;
  description: string;
  data: TransactionLog[];
  pagination: Pagination;
}
