export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

export type TCart = TCartItem[];
