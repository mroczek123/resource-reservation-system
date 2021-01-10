export class Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;

  constructor(data: Product) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
  }
}

export enum ProductCategory {
  BREAKFAST,
  DINNER,
  SUPPER,
  ALCOHOL,
  DRINK,
}

export const ProductCategoryChoices = {
  [ProductCategory.BREAKFAST]: "Breakfast",
  [ProductCategory.DINNER]: "Dinner",
  [ProductCategory.SUPPER]: "Supper",
  [ProductCategory.ALCOHOL]: "Alcohol",
  [ProductCategory.DRINK]: "Drink",
}