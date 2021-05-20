import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {UserModel} from '../../access/models/UserModel';

export interface UserListResponseDto extends ResponseDto<UserModel[]> {

}


