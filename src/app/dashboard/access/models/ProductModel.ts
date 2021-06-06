import {CategoryModel} from './CategoryModel';
import {BrandModel} from './BrandModel';
import {BaseModel} from '@core/abstractClases/BaseModel';

export interface ProductModel extends BaseModel{
  id: number;
  name: string;
  description: string;
  title: string;
  category: CategoryModel;
  brand: BrandModel;
}
