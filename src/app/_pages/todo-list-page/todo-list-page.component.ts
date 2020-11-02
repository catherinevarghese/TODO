import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TodoListService} from '../../_services/todoList.service';
import { AuthenticationService} from  '../../_services/authentication.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  tasks: any;
  complete: false;
  selectedAll: boolean;
  constructor(
    private tasksListService: TodoListService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.tasksListService.getTodoList().subscribe((res)=>{
      this.tasks = res;
    })
  }
  
  selectAll(e){
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

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }
}
