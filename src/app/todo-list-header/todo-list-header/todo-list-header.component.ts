import { Component, Output, EventEmitter } from '@angular/core';
import {Todo } from '../../resource/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {
  // We first define a newTodo property and assign a new Todo() when the component class is instantiated.
  // This is the same Todo instance specified in the two-way binding expression of [(ngModel)] in our view:
  newTodo: Todo = new Todo();
  // Whenever the input value changes in the view, the value in the component instance is updated.
  // And whenever the value in the component instance changes, the value in the input element in the view is updated.

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    //  instead of injecting the TodoDataService in our new TodoListHeaderComponent to save the new todo, 
    // we emit an add event and pass the new todo as an argument.
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
