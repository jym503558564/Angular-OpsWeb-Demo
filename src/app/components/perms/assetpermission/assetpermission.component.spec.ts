import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetpermissionComponent } from './assetpermission.component';

describe('AssetpermissionComponent', () => {
  let component: AssetpermissionComponent;
  let fixture: ComponentFixture<AssetpermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetpermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
