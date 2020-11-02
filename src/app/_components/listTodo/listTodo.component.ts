import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../../_services/todoList.service';
@Component({
  selector: 'app-list-todo-page',
  templateUrl: './listTodo.component.html',
  styleUrls: ['./listTodo.component.scss']
})
export class ListTodoComponent implements OnInit {
  tasks: any;
  complete: false;
  selectedAll: boolean;
  buttonDisabled: boolean;
  constructor(
    private tasksListService: TodoListService,
  ) { }

  ngOnInit() {
    this.tasksListService.getTodoList().subscribe((res)=>{
      this.tasks = res;
    })
    this.buttonDisabled = true;
  }

  selectOne(data){
  const value =this.tasks.findIndex(x => x.id === data)
  this.tasks[value].completed = !this.tasks[value].completed
  }

  selectAll(e){
    this.buttonDisabled = !this.buttonDisabled;
    if(e.target.checked){
       this.selectedAll = true;
       for(var i=0;i< this.tasks.length; i++){
        this.tasks[i].completed = this.selectedAll;
      }
    }
    else{
       this.selectedAll = false;
       for(var i=0;i< this.tasks.length; i++){
        this.tasks[i].completed = this.selectedAll;
      }
    }
   }

   deleteAll(){
     this.tasksListService.deleteAllTodoList().subscribe((res) => {
      this.tasksListService.getTodoList().subscribe((data)=>{
        this.tasks = data;
      })
     }) 
     }
}
