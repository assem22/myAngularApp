import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCreateComponent} from './user-create/user-create.component';
import {AppComponent} from './app.component';
import {UserDetailComponent} from './user-detail/user-detail.component';


const routes: Routes = [
  {path: '' , component: AppComponent},
  {path: 'add' , component: UserCreateComponent},
  {path: ':id' , component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
