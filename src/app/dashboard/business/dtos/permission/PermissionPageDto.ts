import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PermissionModel} from '../../../access/models/PermissionModel';
import {PageModel} from '@core/abstractClases/PageModel';

export interface PermissionPageDto extends ResponseDto<PageModel<PermissionModel>> {

}


