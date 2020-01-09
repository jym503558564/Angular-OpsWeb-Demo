import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionofflineComponent } from './sessionoffline.component';

describe('SessionofflineComponent', () => {
  let component: SessionofflineComponent;
  let fixture: ComponentFixture<SessionofflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionofflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionofflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
