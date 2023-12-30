import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todos } from '../today-list/today-list.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient,  private authService: AuthService) { }

  private todoListSubject = new BehaviorSubject<Todos[]>([]);
  todoList$: Observable<Todos[]> = this.todoListSubject.asObservable();

  private getHeaders(): HttpHeaders {
    // Retrieve the token from session storage
    const token = this.authService.getToken();

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }

  private handleUnauthorizedError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      // Unauthorized, log out the user
      this.authService.logout();
    }
    return throwError(error);
  }

  updateTodoList(newTodoList: Todos[]): void {
    this.todoListSubject.next(newTodoList);
  }

  getTodoList(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(environment.api + 'todo/viewAllTodos', { headers })
    .pipe(catchError(error => this.handleUnauthorizedError(error)));
  }

  deleteTodo(id:number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${environment.api}todo/deleteTodo/${id}`, { headers })
    .pipe(catchError(error => this.handleUnauthorizedError(error)));
  }

  addTodo(data:object){
    const headers = this.getHeaders();
    return this.http.post(environment.api + 'todo/createTodo',data, { headers })
    .pipe(catchError(error => this.handleUnauthorizedError(error)));

  }

  editTodo(data:object){
    const headers = this.getHeaders();
    return this.http.put(environment.api + 'todo/updateTodo',data, { headers })
    .pipe(catchError(error => this.handleUnauthorizedError(error)));

  }
}
