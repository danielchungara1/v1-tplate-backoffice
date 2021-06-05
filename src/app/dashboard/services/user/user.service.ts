import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {UserEndpoints} from './user-endpoints';
import {ProductModel} from '../../access/models/ProductModel';
import {RoleModel} from '../../access/models/RoleModel';
import {UserModel} from '../../access/models/UserModel';
import {UserDto} from './user-dto';
import {MapperService} from '@core/mapper/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<UserModel> {

  constructor(protected httpService: HttpService,
              private mapperService: MapperService) {
    super(httpService, new UserEndpoints());
  }

  protected buildDto(model: UserModel): any {
    const userDto = this.mapperService.map(model, UserDto);
    userDto.roleId = model.role.id;
    return userDto;
  }

}
