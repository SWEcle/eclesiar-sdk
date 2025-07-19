export type AccountData = {
    id: number;
    username: string;
    avatar: string;
    region_id: number;
    nationality_id: number;
    total_damage: number;
    total_mined_gold: number;
    total_builder_progress: number;
    day_of_birth: number;
  }

  export type EquipmentItem = {
    id: number;
    equipment_id: number;
    is_equipped: boolean;
  }