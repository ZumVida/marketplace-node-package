import type { GeoAddress, GeoCoords } from '../geo';

export interface Recipient {
  id: number;
  address: string;
  address_details?: GeoAddress | null;
  contact: string;
  coords?: GeoCoords | null;
  dni?: string;
  name: string;
}

export type RecipientRequestCreate = Omit<Recipient, 'id'>;
export type RecipientRequestUpdate = Partial<RecipientRequestCreate>;
