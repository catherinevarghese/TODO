import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class TodoListService {
    constructor(private http: HttpClient) {
    }
    createTodoList(tasks: string) {
        return this.http.post<any>(`${environment.BASEURL}/todolist`, { tasks })
            .pipe(map(task => {
                return task;
            }));
    }
  deleteAllTodoList(){
    return this.http.delete<any>(`${environment.BASEURL}/todolist`, { })
    .pipe(map(task => {
        return task;
    }));
  }
    getTodoList(){
        return this.http.get<any>(`${environment.BASEURL}/todolist`)
        .pipe(map(tasks => {
            return tasks;
        }));
    }
}