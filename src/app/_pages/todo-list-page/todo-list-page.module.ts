import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { ListPageRoutingModule } from './todo-list-page-routing.module';
import { ListPageComponent } from './todo-list-page.component';
import {AddTodoComponent} from '../../_components/addTodo/addTodo.component';
import{ListTodoComponent} from '../../_components/listTodo/listTodo.component';
// import { AppRoutingModule } from '../app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [ListPageComponent,AddTodoComponent,ListTodoComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule, 
    FormsModule, 
  ]
})
export class ListPageModule { }
