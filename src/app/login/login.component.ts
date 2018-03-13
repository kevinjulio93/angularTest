import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private user;
  private is_login;

  constructor(public ls: LoginService, private router: Router) {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  loginUser() {
    this.ls.auth(this.user)
      .subscribe(data => {
        console.log(data);
        this.is_login = data;
        console.log(this.is_login.auth);

        if (this.is_login.auth === 'true') {
          this.is_login = data;

          this.router.navigate(['/dash']);
        } else {

          alert('Usuario o Contraseña Errados');
        }
      });
  }

  getLoginUser() {
    console.log(this.is_login);
    return this.is_login;
  }

}
