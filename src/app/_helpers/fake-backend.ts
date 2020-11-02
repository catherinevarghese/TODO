import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { v4 as uuidv4 } from "uuid";
import {data} from './users';
import{Todolist} from './todo';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/todolist') && method === 'POST':
                   return  createTasks();
                case url.endsWith('/todolist') && method === 'GET':
                    return  getTasks();
                case url.match('todolist') && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function getTasks(){
            return ok(Todolist.TODO);
        }

        function createTasks(){
        const {tasks, id,completed} = body;
        body.id = uuidv4();
        body.completed = false;
        if(Todolist.TODO.find(x => x.tasks === body.tasks)){
            return error("The task is already added")
        }
        Todolist.TODO.push({
            id: body.id,
            tasks:body.tasks,
            completed:body.completed
        });
        console.log(Todolist.TODO);
        return ok({
            id: body.id,
            tasks:body.tasks,
            completed: body.completed
        });
        }
        function register() {
            const user = body
            if (data.USERS.find(x => x.email === user.email)) {
                return error('Username "' + user.username + '" is already taken')
            }
            user.id = uuidv4();
            data.USERS.push(user);
            localStorage.setItem('users', JSON.stringify(data.USERS));
            return ok();
        }

        function authenticate() {
            const { email, password } = body;
            const user = data.USERS.find(x => x.email === email && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                username: user.email,
                password: user.password
            })
        }

        function deleteUser() {
            Todolist.TODO =[];
            return ok(Todolist.TODO);
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }
        function error(message) {
            return throwError({ error: { message } });
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
