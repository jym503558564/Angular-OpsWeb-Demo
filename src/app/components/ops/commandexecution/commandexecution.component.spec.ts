import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandexecutionComponent } from './commandexecution.component';

describe('CommandexecutionComponent', () => {
  let component: CommandexecutionComponent;
  let fixture: ComponentFixture<CommandexecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandexecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
