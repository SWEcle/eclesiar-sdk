import { getAccount } from './getAccount';
import { getMyEquipment } from './getMyEquipment';

import type { AccountsApi } from './types';

export const accountsApi: AccountsApi = {
    getAccount,
    getMyEquipment,
}
export type { AccountsApi };
export {
    getAccount,
    getMyEquipment,
}