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
    this.estudiante={
      name:'',
      last_name:'',
      email:'',
      password:''

    }
  }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.ts.getEstudiantes()
      .subscribe(data => {
        this.estudiantes=data;
        console.log(data);
      });
  }

  save(){

    this.ts.saveEstudiante(this.estudiante)
    .subscribe(data => {
      console.log(data);
    });

  }

  updateEstudent(){
    this.ts.updateEstudiante(this.id)
    .subscribe(data => {
      console.log(data);
    });
  }

  deleteEstudiante(estudiante){
    this.deleteEstudiante(this.estudiante)
    .subscribe(data => {
      console.log("aqui");
    });
  }

}
