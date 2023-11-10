import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<any> {
    return this.http.get(environment.api + 'temp/viewAll');
  }

  deleteTodo(id:number): Observable<any> {
    console.log("deleteTodo is called",`${environment.api}temp/delete/${id}`);
    
    return this.http.delete(`${environment.api}temp/delete/${id}`,{});
  }
}
