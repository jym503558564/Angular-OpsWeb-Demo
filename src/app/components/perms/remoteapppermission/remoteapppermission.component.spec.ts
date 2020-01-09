import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteapppermissionComponent } from './remoteapppermission.component';

describe('RemoteapppermissionComponent', () => {
  let component: RemoteapppermissionComponent;
  let fixture: ComponentFixture<RemoteapppermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteapppermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteapppermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
