import {BaseModel} from '@core/abstract/BaseModel';

export interface BrandModel extends BaseModel{
  id: number;
  name: string;
  title: string;
  description: string;
}
