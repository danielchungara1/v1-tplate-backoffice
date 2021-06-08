import {RoleModel} from './RoleModel';

export interface UserModel {
  id: number;

  // Credentials
  username: string;
  password: string;

  // Contact
  name: string;
  lastname: string;
  email: string;
  phone: string;

  // Role
  role: RoleModel;
}
