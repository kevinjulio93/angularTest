import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashComponent} from './dash/dash.component';
import {AppRoutingModule} from './app-routes.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {TestService} from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
