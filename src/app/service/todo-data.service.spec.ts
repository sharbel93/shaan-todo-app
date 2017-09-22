import { TestBed, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import {Todo} from '../resource/todo';
import { ApiService } from './Api-service/api.service';
import { ApiMockService } from './api-mock.service';


describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // we tell the injector to provide the ApiMockService whenever the ApiService is requested
      providers: [TodoDataService,
      {
        provide: ApiService,
      useClass: ApiMockService}
    ]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

});
