export interface Currency {
  id: number;
  code: CurrencyCode;
  image: string | null;
  name: string;
  price: number;
}

export type CurrencyRequestCreate = Omit<Currency, 'id'>;
export type CurrencyRequestUpdate = Partial<
  Omit<CurrencyRequestCreate, 'code'>
>;

export enum CurrencyCode {
  BTC = 'BTC',
  CUP = 'CUP',
  EUR = 'EUR',
  MLC = 'MLC',
  TTP = 'TTP',
  USD = 'USD',
  USDT = 'USDT',
}
