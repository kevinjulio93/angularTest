import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {

  
  url_api='http://127.0.0.1:8000/api/';
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'aplication/json'})
  };
  constructor(private http: HttpClient) { }



   getEstudiantes() {
    return this.http.get(this.url_api+'estudiante');
     
  }


}
