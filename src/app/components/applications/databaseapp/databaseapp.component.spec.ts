import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseappComponent } from './databaseapp.component';

describe('DatabaseappComponent', () => {
  let component: DatabaseappComponent;
  let fixture: ComponentFixture<DatabaseappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
