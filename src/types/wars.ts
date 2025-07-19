export type WarNation = {
  id: number;
  name: string;
  avatar: string;
};

export type WarRegion = {
  id: number;
  name: string;
};

export type WarFlags = {
  is_revolution: 0 | 1;
};

export type War = {
  id: number;
  attackers: WarNation;
  defenders: WarNation;
  region: WarRegion;
  attackers_score: number;
  defenders_score: number;
  current_round_number: number;
  current_round_id: number;
  flags: WarFlags;
};

export type WarRound = {
  id: number;
  end_date: string;
  attackers_score: number;
  defenders_score: number;
  attackers_points: number;
  defenders_points: number;
  attackers_hero: number | null;
  defenders_hero: number | null;
};

export type HitFighter = {
  id: number;
  type: "account";
};

export type WarHit = {
  id: number;
  fighter: HitFighter;
  damage: number;
  side: "ATTACKER" | "DEFENDER";
  item_id: number | null;
  created_at: string;
};