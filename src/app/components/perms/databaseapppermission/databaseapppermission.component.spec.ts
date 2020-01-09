import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseapppermissionComponent } from './databaseapppermission.component';

describe('DatabaseapppermissionComponent', () => {
  let component: DatabaseapppermissionComponent;
  let fixture: ComponentFixture<DatabaseapppermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseapppermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseapppermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
