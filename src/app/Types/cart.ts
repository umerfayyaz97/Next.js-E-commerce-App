import { Image as IImage } from "sanity";
export type IProduct = {
  title: string;
  image: IImage[];
  price: number;
  _id: string;
};
export type Cart = {
  items: IProduct[];
  totalQuantity: number;
  totalAmount: number;
};
export type CartRootState = {
  cart: Cart;
};
