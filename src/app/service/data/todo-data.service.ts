import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080//users/${username}/todos`);
    //console.log("Testing bean...") 
  }

  public deleteTodoItem(username, todo_id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${todo_id}`);
  }

  public retrieveTodoItem(username, todo_id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${todo_id}`);
  }

  public updateTodo(username, todo_id, todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${todo_id}`, todo);
  }

  public createTodo(username, todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`
    , todo);
  }
}
