import { getServerStatus } from './getStatus';
import { getServerItems } from './getItems';
import { getServerEquipments } from './getEquipments';

import type { ServerApi } from './types';

export const serverApi: ServerApi = {
  getServerStatus,
  getServerItems,
  getServerEquipments,
};
export type { ServerApi };
export {
  getServerStatus,
  getServerItems,
  getServerEquipments,
};