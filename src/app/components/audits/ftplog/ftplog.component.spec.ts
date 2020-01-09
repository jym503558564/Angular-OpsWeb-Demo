import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtplogComponent } from './ftplog.component';

describe('FtplogComponent', () => {
  let component: FtplogComponent;
  let fixture: ComponentFixture<FtplogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtplogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
