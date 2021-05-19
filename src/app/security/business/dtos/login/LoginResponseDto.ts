import {ResponseDto} from '@core/abstractClases/ResponseDto';

interface LoginData {
  token: string;
}

export interface LoginResponseDto extends ResponseDto<LoginData> {

}


