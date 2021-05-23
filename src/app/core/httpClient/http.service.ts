import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  static CONNECTION_REFUSE = {
    code: 0,
    message: 'Connection error.'
  };

  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string;

  constructor(private http: HttpClient) {
    this.resetOptions();
  }

  param(key: string, value: string): HttpService {
    if (value != null) {
      this.params = this.params.append(key, value); // This class is immutable
    }
    return this;
  }

  paramsFrom(dto: any): HttpService {
    Object.getOwnPropertyNames(dto)
      .forEach(item => this.param(item, dto[item]));
    return this;
  }

  pdf(): HttpService {
    this.responseType = 'blob';
    this.header('Accept', 'application/pdf , application/json');
    return this;
  }

  post<T>(endpoint: string, body?: object): Observable<T> {
    return this.http
      .post<T>(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http
      .get<T>(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  put<T>(endpoint: string, body?: object): Observable<T> {
    return this.http
      .put<T>(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  patch<T>(endpoint: string, body?: object): Observable<T> {
    return this.http
      .patch<T>(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http
      .delete<T>(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error)));
  }

  authBasic(username: number, password: string): HttpService {
    return this.header('Authorization', 'Basic ' + btoa(username + ':' + password));
  }

  header(key: string, value: string): HttpService {
    if (value != null) {
      this.headers = this.headers.append(key, value); // This class is immutable
    }
    return this;
  }

  private resetOptions(): void {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

  private createOptions(): any {
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    this.resetOptions();
    return options;
  }

  private extractData(response): any {

    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/pdf') !== -1) {
        const blob = new Blob([response.body], {type: 'application/pdf'});
        window.open(window.URL.createObjectURL(blob));
      } else if (contentType.indexOf('application/json') !== -1) {
        return response.body; // with 'text': JSON.parse(response.body);
      }
    } else {
      return response;
    }
  }

  private handleError(response): any {
    if (response.status === HttpService.CONNECTION_REFUSE.code) {
      response.error.message = HttpService.CONNECTION_REFUSE.message;
      return throwError(response.error);
    }

    return throwError(response.error);
  }

}
