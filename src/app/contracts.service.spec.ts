import { TestBed, inject } from '@angular/core/testing';

import { ContractsService } from './contracts.service';

describe('ContractsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractsService]
    });
  });

  it('should ...', inject([ContractsService], (service: ContractsService) => {
    expect(service).toBeTruthy();
  }));
});
