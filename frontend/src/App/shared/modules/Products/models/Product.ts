export class Product {
  name: string;
  price: number;
  category: string;

  constructor(data: Product) {
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
  }
}