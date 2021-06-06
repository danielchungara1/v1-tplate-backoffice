import {BaseModel} from '@core/abstractClases/BaseModel';

export interface BrandModel extends BaseModel{
  id: number;
  name: string;
  title: string;
  description: string;
}
