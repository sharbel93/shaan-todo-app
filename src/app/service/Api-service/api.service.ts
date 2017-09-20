import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Http, Response } from '@angular/http';
import { Todo } from '../../resource/todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

   // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
      // will use this.http.get()
      return this.http.get(API_URL + '/todos')
     // We call the map() method on the Observable to transform the the response from the API into an array of Todo objects
     .map(res => {
      const todos = res.json();

     // We then loop over the todo’s of the API response and return an array of Todo instances. 
      // Note that this second use of map() is using Array.prototype.map(), 
      // not the RxJS operator.
      return todos.map((todo) => new Todo(todo));
})
// we attach an error handler to log potential errors to the console
.catch(this.handleError);
  }

    // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    // allows us to create a new todo
    // will use this.http.post()

    // We first perform a POST request to our API and pass in the data as the second argument
    return this.http.post(API_URL + '/todos', todo)
    // then transform the response into a Todo object
    .map(res => {

      return new Todo(res.json());
    })
    .catch(this.handleError);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    // will use this.http.get()
    return this.http.get(API_URL + '/todos/' + todoId)
    .map(res => {
      return new Todo(res.json());
    })
    .catch(this.handleError);
  }


   // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    // allows us to update a single todo
     // will use this.http.put()

    //  We first perform a PUT request to our API and pass in the data as the second argument
     return this.http.put(API_URL + '/todos/' + todo.id, todo)
     .map(res => {
      // and then transform the response into a Todo object
       return new Todo(res.json());
     })
     .catch(this.handleError);

  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<null> {
     // will use this.http.delete()
    //  first perform a DELETE request to our API:
     return this.http.delete(API_URL + '/todos/' + todoId)
    //  then transform the response into null:
     .map(res => null)
     .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
