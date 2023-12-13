import { TPagination } from ".";

export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  images: string[];
  description: string;
  price: number;
  saleOff: any;
  sku: any;
}

export interface TProductParams extends TPagination {
  name?: string;
}
export interface TCommentParams extends TPagination {
  productId: string;
}

export interface IProductCardProps {
  isSaler?: boolean;
  data: IProduct;
}

export interface IPacksize {
  id: string;
  price: number;
  name: string;
  image?: string;
  productId: any;
}

export interface IComment {
  id: string;
  userName: string;
  email: string;
  content: string;
  phone: number;
  productId: string;
  createdAt: number;
}
