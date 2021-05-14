import {ResponseDto} from './ResponseDto';

interface LoginData {
  token: string;
}

export interface LoginResponseDto extends ResponseDto<LoginData> {

}


