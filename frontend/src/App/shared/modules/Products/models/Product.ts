export class Product {
  id: string;
  name: string;
  price: number;
  category: string;

  constructor(data: Product) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
  }
}