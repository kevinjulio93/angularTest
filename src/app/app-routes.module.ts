import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';


const routes :  Routes=[

    {path:'login', component:LoginComponent},
    {path: 'dash', component:DashComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
