import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {BrandModel} from '../../../access/models/BrandModel';

export interface BrandPageDto extends ResponseDto<PageModel<BrandModel>> {

}


