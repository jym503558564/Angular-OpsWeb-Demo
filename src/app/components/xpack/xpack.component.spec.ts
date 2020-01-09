import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpackComponent } from './xpack.component';

describe('XpackComponent', () => {
  let component: XpackComponent;
  let fixture: ComponentFixture<XpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
