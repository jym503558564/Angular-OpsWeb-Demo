import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemuserComponent } from './systemuser.component';

describe('SystemuserComponent', () => {
  let component: SystemuserComponent;
  let fixture: ComponentFixture<SystemuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
