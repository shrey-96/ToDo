import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/service/data/todo-data.service'

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // todos = [
  //   new Todo(1, 'First thing', false, new Date()),
  //   new Todo(2, 'Second thing', false, new Date()),
  //   new Todo(3, 'Third thing', false, new Date())
  // ]

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('shrey').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
