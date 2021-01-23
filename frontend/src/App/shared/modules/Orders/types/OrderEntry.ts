import { Product } from "../../Products/models/Product";

export class OrderEntry {
  id?: string;
  product: Product;
  amount: number;

  constructor(data: {id?: string, product: Product, amount: number}) {
    this.id = data.id;
    this.product = data.product;
    this.amount = data.amount;
  }

  get price(): number {
    return this.product.price * this.amount
  }
}