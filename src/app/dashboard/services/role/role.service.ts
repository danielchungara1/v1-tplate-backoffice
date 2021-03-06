import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {RoleEndpoints} from './role-endpoints';
import {ProductModel} from '../../models/ProductModel';
import {RoleModel} from '../../models/RoleModel';
import {RoleDto} from './role-dto';
import {MapperService} from '@core/mapper/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends CrudService<RoleModel> {

  constructor(protected httpService: HttpService,
              private mapperService: MapperService) {
    super(httpService, new RoleEndpoints());
  }

  protected buildDto(model: RoleModel): any {
    const roleDto = this.mapperService.map(model, RoleDto);
    roleDto.permissionIds = model.permissions.map(role => role.id);
    return roleDto;
  }

}
