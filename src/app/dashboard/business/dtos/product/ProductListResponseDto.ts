import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {ProductModel} from '../../../access/models/ProductModel';

export interface ProductListResponseDto extends ResponseDto<ProductModel[]> {

}


