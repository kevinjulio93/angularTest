import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [TestService]
})
export class DashComponent implements OnInit {

  private estudiantes;
  private estudiante;
  private id;

  constructor(public ts: TestService) {
    this.estudiante = {
      name: '',
      last_name: '',
      email: '',
      password: ''

    };
  }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.ts.getEstudiantes()
      .subscribe(data => {
        this.estudiantes = data;
        console.log(data);
      });
  }

  save() {

    this.ts.saveEstudiante(this.estudiante)
      .subscribe(data => {
        alert("Sucessfully");
        this.getEstudiantes();
        this.estudiante = {
          name: '',
          last_name: '',
          email: '',
          password: ''

        };
      });

  }

  updateEstudent(id) {
    this.ts.updateEstudiante(id,this.estudiante)
      .subscribe(data => {
        console.log(data);
      });
  }

  deleteEstudiante(id) {
    this.ts.deleteEstudiante(1)
      .subscribe(data => {
        console.log(data);
      });
  }

}
