import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [TestService, LoginComponent]
})
export class DashComponent implements OnInit {

  private estudiantes;
  private estudiante;
  private authUser;
  private id;
  private is_updated;
  private is_saved;
  fileToUpload: File = null;

  constructor(public ts: TestService, private login_comp: LoginComponent) {
    this.estudiante = {
      id: '',
      name: '',
      last_name: '',
      email: '',
      password: ''

    };
  }

  ngOnInit() {
    this.getEstudiantes();
    // this.authUser = this.login_comp.getLoginUser().user;
    this.is_updated = false;
    this.is_saved = true;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.ts.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }


  getEstudiantes() {
    this.ts.getEstudiantes()
      .subscribe(data => {
        this.estudiantes = data;
        console.log(data);
      });
  }

  save() {
    if (this.is_saved) {
      this.uploadFileToActivity();
      this.ts.saveEstudiante(this.estudiante)
        .subscribe(data => {
          alert('Sucessfully');
          this.getEstudiantes();
          this.estudiante = {
            name: '',
            last_name: '',
            email: '',
            password: ''

          };
        });
    } else if (this.is_updated) {
      this.ts.updateEstudiante(this.estudiante.id, this.estudiante)
        .subscribe(data => {
          console.log(data);
          alert('Sucessfully');
          this.getEstudiantes();
          this.is_updated = false;
          this.is_saved = true;
          this.estudiante = {
            name: '',
            last_name: '',
            email: '',
            password: ''

          };
        });
    }

  }


  deleteEstudiante(id) {
    this.ts.deleteEstudiante(id)
      .subscribe(data => {
        console.log(data);
        alert('Sucessfully');
        this.getEstudiantes();
      });
  }

  getEstudianteById(id) {
    this.ts.getEstudianteById(id)
      .subscribe(data => {
        console.log(data);
        this.estudiante = data;
        this.is_updated = true;
        this.is_saved = false;

      });
  }

}
