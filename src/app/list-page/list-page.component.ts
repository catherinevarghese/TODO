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
      console.log(res);
      this.tasks = res;
      console.log(this.tasks);
    })
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
  console.log(this.selectedAll);
  console.log(this.tasks)
}

  // selectAll(value){
  //   console.log(value)
  //   for(var i=0;i< this.tasks.length; i++){
  //     this.tasks[i].completed = this.selectedAll;
  //   }
  //   console.log(this.tasks)
  // }
  test(data){

    console.log(data);
  const value =this.tasks.findIndex(x => x.id === data)
  this.tasks[value].completed = !this.tasks[value].completed
    console.log(this.tasks);
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
