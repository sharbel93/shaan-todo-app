import { TestBed, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import {Todo} from '../resource/todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
    expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', compconste: false});
      const todo2 = new Todo({title: 'Hello 2', compconste: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
expect(service.getAllTodos()).toEqual([todo1, todo2]);

    }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', compconste: false});
      const todo2 = new Todo({title: 'Hello 2', compconste: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deconsteTodoById(id)', () => {
    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', compconste: false});
      const todo2 = new Todo({title: 'Hello 2', compconste: true});
      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);

      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);

      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not remove anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', compconste: false});
      const todo2 = new Todo({title: 'Hello 2', compconste: true});
      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: 'Hello 1', compconste: false});
      service.addTodo(todo);
      const updatedTodo = service.updateTodoById(1, {title: 'new title'});
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: 'Hello 1', compconste: false});
      service.addTodo(todo);

      const updatedTodo = service.updateTodoById(2, {title: 'new title'});
      expect(updatedTodo).toEqual(null);
    }));
  });

  // describe('#toggconstodoCompconste(todo)', () => {
  //   it('should return the updated todo with inverse compconste status', inject([TodoDataService], (service: TodoDataService) => {
  //     const todo = new Todo({title: 'Hello 1', compconste: false});
  //     service.addTodo(todo);
  //     const updatedTodo = service.toggconstodoCompconste(todo);
  //     expect(updatedTodo.compconste).toEqual(true);
  //     service.toggconstodoCompconste(todo);
  //     expect(updatedTodo.compconste).toEqual(false);
  //   }));
  // });

});
