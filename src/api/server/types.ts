import { ServerEquipment, ServerItem, ServerStatus } from "@/types/server";
export interface ServerApi {
    getServerStatus(): Promise<ServerStatus[]>;
    getServerItems({ page }: { page?: number }): Promise<ServerItem[]>;
    getServerEquipments({ page }: { page?: number }): Promise<ServerEquipment[]>;
}