import {PermissionModel} from './PermissionModel';
import {BaseModel} from '@core/abstract/BaseModel';

export interface RoleModel extends BaseModel{
  id: number;
  name: string;
  description: string;
  permissions: PermissionModel[];
}
