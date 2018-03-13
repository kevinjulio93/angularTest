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

  saveEstudiante(estudiante) {
    return this.http.post(this.url_api + 'estudiante', estudiante);
  }

  updateEstudiante(id, data) {
    return this.http.put(this.url_api + 'estudiante/' + id, data);
  }

  deleteEstudiante(id) {
    return this.http.delete(this.url_api + 'estudiante/' + id);
  }
}
