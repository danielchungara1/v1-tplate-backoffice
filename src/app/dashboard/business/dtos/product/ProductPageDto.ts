import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {Page} from '@core/abstractClases/Page';
import {ProductModel} from '../../../access/models/ProductModel';

export interface ProductPageDto extends ResponseDto<Page<ProductModel>> {

}


