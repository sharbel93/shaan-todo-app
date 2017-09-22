import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Todo } from './resource/todo';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from './service/api-mock.service';
import { TodoDataService } from './service/todo-data.service';
import { ApiService } from './service/Api-service/api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [TodoDataService,
      {
        provide: ApiService,
        useClass: ApiMockService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
