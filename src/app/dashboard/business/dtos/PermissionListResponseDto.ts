import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PermissionModel} from '../../access/models/PermissionModel';

export interface PermissionListResponseDto extends ResponseDto<PermissionModel[]> {

}


