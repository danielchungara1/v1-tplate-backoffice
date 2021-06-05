import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {Page} from '@core/abstractClases/Page';
import {RoleModel} from '../../../access/models/RoleModel';
import {CategoryModel} from '../../../access/models/CategoryModel';

export interface CategoryPageDto extends ResponseDto<Page<CategoryModel>> {

}


