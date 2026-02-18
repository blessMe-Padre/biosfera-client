export interface CostItemType {
  id?: number;
  title?: string;
  price?: string;
  link?: string;
}

export interface SliderItemType {
  id: number;
  content?: [];
  image?: { url?: string }[];
  link?: string;
}
