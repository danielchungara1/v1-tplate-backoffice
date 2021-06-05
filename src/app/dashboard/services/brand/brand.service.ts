import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {BrandModel} from '../../access/models/BrandModel';
import {BrandEndpoints} from './brand-endpoints';
import {CrudService} from '@core/crud/crud.service';
import {BrandDto} from './brand-dto';
import {MapperService} from '@core/mapper/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends CrudService<BrandModel> {

  constructor(protected httpService: HttpService,
              private mapperService: MapperService ) {
    super(httpService, BrandEndpoints);
  }

  protected buildDto(model: BrandModel): any {
    return this.mapperService.map(model, BrandDto);
  }

}
