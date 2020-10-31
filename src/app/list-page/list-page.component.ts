import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TodoListService} from '../_services/todoList.service';
import { AuthenticationService} from  '../_services/authentication.service'
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  tasks: any;
  constructor(
    private tasksListService: TodoListService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
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
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
