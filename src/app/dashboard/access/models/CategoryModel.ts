import {BaseModel} from '@core/abstractClases/BaseModel';

export interface CategoryModel extends BaseModel{
  id: number;
  name: string;
  description: string;
  title: string;
  parent: CategoryModel;
  parentId: number;
}
