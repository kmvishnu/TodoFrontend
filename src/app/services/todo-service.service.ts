import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todos } from '../today-list/today-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  private todoListSubject = new BehaviorSubject<Todos[]>([]);
  todoList$: Observable<Todos[]> = this.todoListSubject.asObservable();

  updateTodoList(newTodoList: Todos[]): void {
    this.todoListSubject.next(newTodoList);
  }

  getTodoList(): Observable<any> {
    return this.http.get(environment.api + 'todo/viewAllTodos');
  }

  deleteTodo(id:number): Observable<any> {
    
    return this.http.delete(`${environment.api}todo/deleteTodo/${id}`,{});
  }

  addTodo(data:object){
    return this.http.post(environment.api + 'todo/createTodo',data);

  }

  editTodo(data:object){
    return this.http.put(environment.api + 'todo/updateTodo',data);

  }
}
