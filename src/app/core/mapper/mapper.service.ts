import {Injectable} from '@angular/core';
import ObjectMapper from 'object-mapper';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() {
  }

  public map(source: any, target: any): any{
    return ObjectMapper(source, target);
  }
}
