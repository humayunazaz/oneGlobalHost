import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInfraComponent } from './single-infra.component';

describe('SingleInfraComponent', () => {
  let component: SingleInfraComponent;
  let fixture: ComponentFixture<SingleInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
