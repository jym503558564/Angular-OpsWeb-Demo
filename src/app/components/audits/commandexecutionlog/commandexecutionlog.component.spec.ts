import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandexecutionlogComponent } from './commandexecutionlog.component';

describe('CommandexecutionlogComponent', () => {
  let component: CommandexecutionlogComponent;
  let fixture: ComponentFixture<CommandexecutionlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandexecutionlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandexecutionlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
