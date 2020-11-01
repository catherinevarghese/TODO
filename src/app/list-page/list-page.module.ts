import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import {AddTodoComponent} from '../_components/addTodo/addTodo.component';
import{ListTodoComponent} from '../_components/listTodo/listTodo.component';
// import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [ListPageComponent,AddTodoComponent,ListTodoComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    // AppRoutingModule
  ]
})
export class ListPageModule { }
