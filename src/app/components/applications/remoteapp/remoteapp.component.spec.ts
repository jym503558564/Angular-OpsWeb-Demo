import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteappComponent } from './remoteapp.component';

describe('RemoteappComponent', () => {
  let component: RemoteappComponent;
  let fixture: ComponentFixture<RemoteappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
