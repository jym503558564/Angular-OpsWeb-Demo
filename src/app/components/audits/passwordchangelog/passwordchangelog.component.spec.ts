import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordchangelogComponent } from './passwordchangelog.component';

describe('PasswordchangelogComponent', () => {
  let component: PasswordchangelogComponent;
  let fixture: ComponentFixture<PasswordchangelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordchangelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordchangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
