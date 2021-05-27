import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {CategoryModel} from '../../../access/models/CategoryModel';

export interface CategoryListResponseDto extends ResponseDto<CategoryModel[]> {

}


