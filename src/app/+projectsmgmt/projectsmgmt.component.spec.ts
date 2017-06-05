import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsmgmtComponent } from './projectsmgmt.component';

describe('ProjectsmgmtComponent', () => {
  let component: ProjectsmgmtComponent;
  let fixture: ComponentFixture<ProjectsmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
