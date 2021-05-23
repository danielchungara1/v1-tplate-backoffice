import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {UserModel} from '../../../../dashboard/access/models/UserModel';

interface LoginData {
  token: string;
  user: UserModel;

}

export interface LoginResponseDto extends ResponseDto<LoginData> {

}


