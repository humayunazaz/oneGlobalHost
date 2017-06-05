import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstackDeployNewComponent } from './appstack-deploy-new.component';

describe('AppstackDeployNewComponent', () => {
  let component: AppstackDeployNewComponent;
  let fixture: ComponentFixture<AppstackDeployNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstackDeployNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstackDeployNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
