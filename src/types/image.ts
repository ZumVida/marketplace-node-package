import type { PaginationParams } from './pagination';

export interface Image {
  id: number;
  name: string;
  url: string;
  tags: string[] | null;
}

export interface ImageRequestCreate {
  name: string;
  image?: File;
  image_url?: string;
  tags?: string[];
}

export interface ImageRequestFilter extends PaginationParams {
  search?: string;
}

export type ImageRequestUpdate = Partial<ImageRequestCreate>;
