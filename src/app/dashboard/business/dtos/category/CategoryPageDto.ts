import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {RoleModel} from '../../../access/models/RoleModel';
import {CategoryModel} from '../../../access/models/CategoryModel';

export interface CategoryPageDto extends ResponseDto<PageModel<CategoryModel>> {

}


