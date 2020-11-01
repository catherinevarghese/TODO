import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TodoListService} from '../../_services/todoList.service';
import { AuthenticationService} from  '../../_services/authentication.service'
@Component({
  selector: 'app-add-todo-page',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.scss']
})
export class AddTodoComponent implements OnInit {
  tasks: any;
  complete: false;
  selectedAll: boolean;
  constructor(
    private tasksListService: TodoListService,
  ) { }

  ngOnInit(): void {
    
  }
  createTask(){
    var details = (<HTMLInputElement>document.getElementById("tasks")).value;
    console.log(details);
    this.tasksListService.createTodoList(details).subscribe((res)=>{
      console.log(res);
      this.tasksListService.getTodoList().subscribe((res)=>{
        console.log(res);
        this.tasks = res;
        console.log(this.tasks);
      })
    } )
  }
}
