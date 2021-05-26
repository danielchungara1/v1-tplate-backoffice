import {PermissionModel} from './PermissionModel';

export interface RoleModel {
  id: number;
  name: string;
  description: string;
  permissions: PermissionModel[];
}
