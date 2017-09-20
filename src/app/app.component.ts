import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './service/todo-data.service';
import { Todo } from './resource/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements  OnInit {

 todos: Todo[] = [];

 // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor (private todoDataService: TodoDataService) {}

  public ngOnInit() {
    this.todoDataService.getAllTodos()
    .subscribe(
      (todos) => {
        console.log(todos);
        this.todos = todos; }
    );
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo)
    .subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  // Service is now available as this.todoDataService
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      console.log(updatedTodo);
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id)
    .subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }
}
