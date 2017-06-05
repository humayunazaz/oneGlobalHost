import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupManagementMembershipComponent } from './group-management-membership.component';

describe('GroupManagementMembershipComponent', () => {
  let component: GroupManagementMembershipComponent;
  let fixture: ComponentFixture<GroupManagementMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupManagementMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupManagementMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
