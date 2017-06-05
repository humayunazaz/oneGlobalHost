import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedsComponent } from './live-feeds.component';

describe('LiveFeedsComponent', () => {
  let component: LiveFeedsComponent;
  let fixture: ComponentFixture<LiveFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
