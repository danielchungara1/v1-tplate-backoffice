import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {RoleModel} from '../../../access/models/RoleModel';

export interface RolePageDto extends ResponseDto<PageModel<RoleModel>> {

}


