import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoComponent } from './view-todo.component';

describe('ViewTodoComponent', () => {
  let component: ViewTodoComponent;
  let fixture: ComponentFixture<ViewTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTodoComponent]
    });
    fixture = TestBed.createComponent(ViewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
