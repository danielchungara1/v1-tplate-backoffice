import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {ProductModel} from '../../../access/models/ProductModel';

export interface ProductPageDto extends ResponseDto<PageModel<ProductModel>> {

}


