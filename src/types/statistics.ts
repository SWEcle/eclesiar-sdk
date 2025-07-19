export type CountryStatisticType =
  | "development"
  | "citizens"
  | "builders"
  | "buildings"
  | "miners"
  | "todaycitizens"
  | "productivity"
  | "activecitizens"
  | "damagetoday"
  | "damage"
  | "strength"
  | "regions"
  | "npcwage";

  export type RankedEntity = {
    id: number;
    name: string;
    avatar: string;
  }
  
  export type RankingItem = {
    entity: RankedEntity;
    value: number;
  }