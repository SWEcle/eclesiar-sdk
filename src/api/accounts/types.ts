import { AccountData, EquipmentItem } from "@/types";

export interface AccountsApi {
    getAccount({ account_id }: { account_id: number }): Promise<AccountData>
    getMyEquipment(): Promise<EquipmentItem[]>;
}