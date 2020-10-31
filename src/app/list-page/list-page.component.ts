import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../_services/todoList.service';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(
    private tasksListService: TodoListService,
  ) { }

  ngOnInit(): void {
  }
  createTask(){
    var value = document.getElementById("tasks").value;
    console.log(value);
    this.tasksListService.createTodoList(value).subscribe((res)=>{
      console.log(res)
    } )
  }
}
