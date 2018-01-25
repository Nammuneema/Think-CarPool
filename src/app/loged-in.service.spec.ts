import { TestBed, inject } from '@angular/core/testing';

import { LogedInService } from './loged-in.service';

describe('LogedInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogedInService]
    });
  });

  it('should be created', inject([LogedInService], (service: LogedInService) => {
    expect(service).toBeTruthy();
  }));
});
