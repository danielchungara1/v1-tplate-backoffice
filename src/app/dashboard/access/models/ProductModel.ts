import {CategoryModel} from './CategoryModel';
import {BrandModel} from './BrandModel';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  title: string;
  category: CategoryModel;
  brand: BrandModel;
}
