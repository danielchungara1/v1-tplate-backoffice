import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {Page} from '@core/abstractClases/Page';
import {BrandModel} from '../../../access/models/BrandModel';

export interface BrandPageDto extends ResponseDto<Page<BrandModel>> {

}


