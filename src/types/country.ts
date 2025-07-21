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