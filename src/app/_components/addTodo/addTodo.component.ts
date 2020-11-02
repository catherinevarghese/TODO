import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TodoListService} from '../../_services/todoList.service';
import { AuthenticationService} from  '../../_services/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-add-todo-page',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.scss']
})
export class AddTodoComponent implements OnInit {
  tasks: any;
  complete: false;
  selectedAll: boolean;
  loginForm: FormGroup;
  constructor(
    private tasksListService: TodoListService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      tasks: ['', Validators.required],
  });
  }
  get formControls() { return this.loginForm.controls; }
 
  createTask(value){
    // var details = (<HTMLInputElement>document.getElementById("tasks")).value;
    console.log(value);
    this.tasksListService.createTodoList(value.tasks).subscribe((res)=>{
      console.log(res);
      this.tasksListService.getTodoList().subscribe((res)=>{
        console.log(res);
        this.tasks = res;
        console.log(this.tasks);
      })
    } )
  }
}
