import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PermissionModel} from '../../../access/models/PermissionModel';
import {Page} from '@core/abstractClases/Page';

export interface PermissionPageDto extends ResponseDto<Page<PermissionModel>> {

}


