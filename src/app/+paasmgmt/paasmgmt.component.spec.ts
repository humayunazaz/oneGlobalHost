import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasmgmtComponent } from './paasmgmt.component';

describe('PaasmgmtComponent', () => {
  let component: PaasmgmtComponent;
  let fixture: ComponentFixture<PaasmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaasmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
