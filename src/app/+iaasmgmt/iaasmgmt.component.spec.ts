import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaasmgmtComponent } from './iaasmgmt.component';

describe('IaasmgmtComponent', () => {
  let component: IaasmgmtComponent;
  let fixture: ComponentFixture<IaasmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaasmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaasmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
