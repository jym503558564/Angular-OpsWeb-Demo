import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdfilterComponent } from './cmdfilter.component';

describe('CmdfilterComponent', () => {
  let component: CmdfilterComponent;
  let fixture: ComponentFixture<CmdfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
