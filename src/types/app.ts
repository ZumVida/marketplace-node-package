import type { PaginationParams } from './pagination';

export interface Application {
  id: number;
  available?: boolean;
  code: string;
  description?: string;
  modules: ApplicationModule[];
  name: string;
  summary?: ApplicationSummary | null;
  theme: ApplicationTheme | null;
  url: string;
}

export interface ApplicationWithToken {
  data: Application;
  app_token: string;
}

export enum ApplicationModule {
  core = 'Core',
  delivery = 'Delivery',
  geo = 'Geo',
  marketplace = 'Marketplace',
  warehouse = 'Warehouse',
}

export interface ApplicationSummary {
  requests?: number;
}

export interface ApplicationTheme {
  primary: string;
  secondary: string;
  icon: string;
  logo: string;
}

export interface ApplicationRequestCreate {
  code: string;
  description?: string;
  modules: ApplicationModule[];
  name: string;
  theme: ApplicationTheme;
  url: string;
}

export interface ApplicationRequestFilter extends PaginationParams {
  available?: boolean;
  code?: string;
  name?: string;
  url?: string;
}

export interface ApplicationRequestUpdate
  extends Partial<ApplicationRequestCreate> {
  available?: boolean;
}
