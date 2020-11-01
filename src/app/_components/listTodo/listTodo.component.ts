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
  constructor(
    private tasksListService: TodoListService,
  ) { }

  ngOnInit() {
    this.tasksListService.getTodoList().subscribe((res)=>{
      console.log(res);
      this.tasks = res;
      console.log(this.tasks);
    })
  }
  selectOne(data){
console.log(data);
  const value =this.tasks.findIndex(x => x.id === data)
  this.tasks[value].completed = !this.tasks[value].completed
    console.log(this.tasks);
  }
}
