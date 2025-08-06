import { WarRound, WarHit, War, GetWarsParams } from "@/types";

export interface WarsApi {
    getWars(params: GetWarsParams): Promise<War[]>;
    getWarRounds({ war_id }: { war_id: number }): Promise<WarRound[]>;
    getWarRoundHits({ war_round_id }: { war_round_id: number }): Promise<WarHit[]>;
}