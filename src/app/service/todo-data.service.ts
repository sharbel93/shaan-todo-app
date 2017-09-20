import { Injectable } from '@angular/core';
import { Todo } from '../resource/todo';
import { ApiService } from './Api-service/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {
// Placeholder for the last id so we can simulate
// automatic incrementing of id's
lastId = 0;

// Placeholder for todo's
todos: Todo[] = [];

  constructor(private api: ApiService) { }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    // if (!todo.id) {
    //   todo.id = ++this.lastId;
    // }
    // this.todos.push(todo);
    // return this;
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    // this.todos = this.todos.filter(todo => todo.id !== todoId);
    // return this;
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   // const todo = this.getTodoById(id);
  //   // if (!todo) {
  //   //   return null;
  //   // }
  //   // Object.assign(todo, values);
  //   // return todo;
  // }

  updateTodo(todo: Todo): Observable<Todo> {
    return  this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    // return this.todos
    // .filter(todo => todo.id === id)
    // .pop();
    return this.api.getTodoById(todoId);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    // const updatedTodo = this.updateTodoById(todo.id,
    //   { complete: !todo.complete });
    //   return updatedTodo;
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
