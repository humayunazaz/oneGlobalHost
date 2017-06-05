import { TestBed, inject } from '@angular/core/testing';

import { InfraService } from './infra.service';

describe('InfraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfraService]
    });
  });

  it('should ...', inject([InfraService], (service: InfraService) => {
    expect(service).toBeTruthy();
  }));
});
