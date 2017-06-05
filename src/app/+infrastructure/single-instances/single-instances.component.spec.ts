import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstancesComponent } from './single-instances.component';

describe('SingleInstancesComponent', () => {
  let component: SingleInstancesComponent;
  let fixture: ComponentFixture<SingleInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
