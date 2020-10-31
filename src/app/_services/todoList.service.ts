import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class TodoListService {
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }

    createTodoList(tasks: string) {
        return this.http.post<any>(`http://localhost:4200:/todolist`, { tasks })
            .pipe(map(task => {
                return task;
            }));
    }

    getTodoList(){
        return this.http.get<any>(`http://localhost:4200:/todolist`)
        .pipe(map(tasks => {
            return tasks;
        }));
    }
}