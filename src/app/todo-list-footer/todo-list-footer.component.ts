import { Component, Input } from '@angular/core';
import { Todo } from '../resource/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];
  constructor() { }



}


// We only define the todos property using the @Input() decorator
// so we can pass in the todos using the todos property.
