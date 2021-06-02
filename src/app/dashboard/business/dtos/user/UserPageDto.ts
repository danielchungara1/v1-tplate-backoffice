import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {UserModel} from '../../../access/models/UserModel';

export interface UserPageDto extends ResponseDto<PageModel<UserModel>> {

}


