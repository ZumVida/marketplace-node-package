import type { PaginationParams } from './pagination';

export interface Application {
  id: number;
  available?: boolean;
  code: string;
  description?: string;
  modules: ModuleSettings;
  name: string;
  summary?: ApplicationSummary | null;
  theme: ApplicationTheme | null;
  url: string;
}

export interface ApplicationWithToken {
  data: Application;
  app_token: string;
}

export interface ModuleSettings {
  billing?: {
    enabled: boolean;
  };
  delivery?: {
    enabled: boolean;
  };
  marketplace?: {
    enabled: boolean;
    'Modules\\Marketplace\\app\\Models\\Store\\Branch'?:
      | '*'
      | number
      | number[];
    'Modules\\Marketplace\\app\\Models\\Product\\Product'?:
      | '*'
      | number
      | number[];
    'Modules\\Marketplace\\app\\Models\\Store\\Store'?: '*' | number | number[];
  };
  warehouse?: {
    enabled: boolean;
    'Modules\\Warehouse\\app\\Models\\Item'?: '*' | number | number[];
    'Modules\\Warehouse\\app\\Models\\Section'?: '*' | number | number[];
    'Modules\\Warehouse\\app\\Models\\Transaction'?: '*' | number | number[];
    'Modules\\Warehouse\\app\\Models\\TransactionType'?:
      | '*'
      | number
      | number[];
    'Modules\\Warehouse\\app\\Models\\Warehouse'?: '*' | number | number[];
  };
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
  modules: ModuleSettings;
  name: string;
  theme: ApplicationTheme;
}

export interface ApplicationRequestFilter extends PaginationParams {
  available?: boolean;
  code?: string;
  name?: string;
}

export interface ApplicationRequestUpdate
  extends Partial<ApplicationRequestCreate> {
  available?: boolean;
}
