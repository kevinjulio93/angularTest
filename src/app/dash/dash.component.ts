import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers:[TestService]
})
export class DashComponent implements OnInit {

  constructor(public ts: TestService) { }

  ngOnInit() {
  }

getEstudiantes(){
  this.ts.getEstudiantes()
  .subscribe(data => {
    console.log(data);
});
}


}
