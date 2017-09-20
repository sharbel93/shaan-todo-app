import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../resource/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent  {

  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}

// The logic is very similar to the logic we have in TodoListComponent.
// First we define an @Input() so we can pass in a Todo instance:

// Then we define the click event handlers for our template and emit a toggleComplete event 
// when the checkbox is clicked and a remove event when the ‘X’ is clicked

// Notice how we don’t actually update or remove data.
// We merely emit events from the TodoListItemComponent when a user clicks a link to complete or remove a todo, 
// making our TodoListItemComponent also a dumb component.

// The TodoListComponent then simply re-emits the events from TodoListItemComponent.

// Bubbling up events from TodoListItemComponent through TodoListComponent allows us to keep both components dumb 
// and ensures that we don’t have to update them when we refactor the TodoDataService to communicate with a REST API 
