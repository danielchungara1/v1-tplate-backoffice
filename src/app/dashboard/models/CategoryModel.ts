import {BaseModel} from '@core/abstract/BaseModel';

export interface CategoryModel extends BaseModel{
  id: number;
  name: string;
  description: string;
  title: string;
  parent: CategoryModel;
  parentId: number;
}
