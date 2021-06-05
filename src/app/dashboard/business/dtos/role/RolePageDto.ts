import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {Page} from '@core/abstractClases/Page';
import {RoleModel} from '../../../access/models/RoleModel';

export interface RolePageDto extends ResponseDto<Page<RoleModel>> {

}


