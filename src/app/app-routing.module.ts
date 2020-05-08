import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignupComponent } from './dashboard/signup/signup.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';




const routes: Routes = [
{path : 'login', component: LoginComponent},
// {path : 'signup', component: SignupComponent},
{path : 'list', component: ListComponent},
{path : '', component: AppComponent},
{path : 'add', component: AddComponent},
{path : 'edit', component: EditComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
