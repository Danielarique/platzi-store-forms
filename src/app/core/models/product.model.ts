import { Category } from "./category.model";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}
