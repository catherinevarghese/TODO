import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TodoListService} from '../../_services/todoList.service';
import { AuthenticationService} from  '../../_services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
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
    private translate: TranslateService
  ) { }

  ngOnInit():void {
  }


  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login-page']);
  }
}
