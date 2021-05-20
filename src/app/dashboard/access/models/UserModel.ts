import {RoleModel} from './RoleModel';

export interface UserModel {
  id: number;
  username: string;
  name: string;
  lastname: string;
  role: RoleModel;
}
