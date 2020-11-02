import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    login(email: string, password: string) {
        console.log(email)
        return this.http.post<any>(`${environment.baseUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
    register(email: string, password: string){
        return this.http.post<any>(`${environment.baseUrl}/users/register`, { email, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }));
    }
}