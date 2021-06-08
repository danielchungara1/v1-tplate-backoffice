import {ResponseDto} from '@core/abstract/ResponseDto';
import {UserModel} from '../../../dashboard/models/UserModel';

interface LoginData {
  token: string;
  user: UserModel;

}

export interface LoginResponseDto extends ResponseDto<LoginData> {

}


