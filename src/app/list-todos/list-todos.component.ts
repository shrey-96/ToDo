import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  message: string

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.todoService.retrieveAllTodos('shrey').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log("Delete todo >> id - " + id)
    this.todoService.deleteTodoItem('shrey',id).subscribe (
      response => {
        this.message = `Delete Successful for id #${id}`
        this.refreshList();
      }
    )
  }

  updateTodo(id) {
    console.log("Update id - #" + id)
    this.router.navigate(['todos', id])
    
  }

}
