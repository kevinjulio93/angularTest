import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TestService {


  url_api = 'http://127.0.0.1:8000/api/';


  constructor(private http: HttpClient) {
  }


  getEstudiantes() {
    return this.http.get(this.url_api + 'estudiante');

  }


}
