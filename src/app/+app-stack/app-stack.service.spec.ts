import { TestBed, inject } from '@angular/core/testing';

import { AppStackService } from './app-stack.service';

describe('AppStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStackService]
    });
  });

  it('should ...', inject([AppStackService], (service: AppStackService) => {
    expect(service).toBeTruthy();
  }));
});
