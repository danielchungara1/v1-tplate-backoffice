import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {Page} from '@core/abstractClases/Page';
import {UserModel} from '../../../access/models/UserModel';

export interface UserPageDto extends ResponseDto<Page<UserModel>> {

}


