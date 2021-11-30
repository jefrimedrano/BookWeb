import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetAllComponent} from  './pages/books/get-all/get-all.component';
import { RouterModule, Routes } from '@angular/router';

const routers: Routes = [
  {path: '',pathMatch:'full',redirectTo:'listar-books'},
  {path:'listar-books', component: GetAllComponent}
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
