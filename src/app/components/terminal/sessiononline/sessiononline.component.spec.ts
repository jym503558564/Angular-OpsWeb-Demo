import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessiononlineComponent } from './sessiononline.component';

describe('SessiononlineComponent', () => {
  let component: SessiononlineComponent;
  let fixture: ComponentFixture<SessiononlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessiononlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessiononlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
