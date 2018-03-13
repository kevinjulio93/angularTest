import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  url_api = 'http://127.0.0.1:8000/api/';


  constructor(private http: HttpClient) {
  }

  auth(user) {
    return this.http.post(this.url_api + 'login', user);
  }

}
