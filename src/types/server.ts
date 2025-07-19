export type ServerStatus = {
    status: string;
    version: string;
    server_name: string;
    server_time: string;
    server_day: number;
  };
  
  export type ServerItem = {
    id: number;
    name: string;
    quality: number;
    type: string;
    avatar: string;
  };
  
  export type ServerEquipment = {
    id: number;
    slot: number;
    grade: number;
    critical_chance: number;
    critical_hit: number;
    damage_percentage: number;
    true_damage: number;
    flatland_damage_percentage: number;
    mountains_damage_percentage: number;
    forest_damage_percentage: number;
    desert_damage_percentage: number;
    accuracy: number;
    drop_chance: number;
    construction_percentage: number;
    hospital_construction_percentage: number;
    militarybase_construction_percentage: number;
    productionfields_construction_percentage: number;
    industrialzone_construction_percentage: number;
    construction_item_donation_percentage: number;
    mining_gold_percentage: number;
    construction_energy_reduction_percentage: number;
    avatar: string;
    drop_category: string;
  };