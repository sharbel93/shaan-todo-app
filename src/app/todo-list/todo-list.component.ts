import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../resource/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}

// To further demonstrate the difference between smart and dumb components,
//  we will also make the TodoListComponent a dumb component.

// First we define an input property todos by marking it with the @Input() decorator.
// This allows us to inject the todos from the parent component.

// Next, we define two output events, remove and toggleComplete, using the @Output() decorator.
// Notice how we set their type to EventEmitter<Todo> and assign them each a new EventEmitter instance.

// The EventEmitter<Todo> type annotation is a TypeScript generic that tells
// TypeScript that both remove and toggleComplete are EventEmitter instances and that the values they emit are a Todo instance.

// Finally, we define the onToggleTodoComplete(todo)
// and onRemoveTodo(todo) event handlers that we specified in our view using (toggleComplete)="onToggleTodoComplete($event)"
// and (remove)="onRemoveTodo($event)".

// Notice how we use $event as the argument name in the view template and todo as the parameter name in the method definition.
// To access the payload (emitted value) of an event in an Angular template, we must always use $event as the argument name.

// So by specifying (toggleComplete)="onToggleTodoComplete($event)" in our view template,
// we tell Angular to use the event payload as the first argument when calling the onToggleTodoComplete method,
// which will match the first parameter of the onToggleTodoComplete method, namely todo.

// We know that the payload will be a todo instance,
// so we define the onToggleTodoComplete method as onToggleTodoComplete(todo: Todo),
// making our code easier to read, understand and maintain.

// Finally, we define our event handlers to also emit a toggleComplete and remove event
// when they receive an incoming payload and specify the todo as the event payload.

// In essence, we let TodoListComponent bubble up the events from its child TodoListItemComponent instances.

// This allows us to handle the business logic outside of TodoListComponent, keeping TodoListComponent dumb, flexible and lightweight.
