import { TestBed, inject } from '@angular/core/testing';
import { CoreServiceService } from '../services/core-service.service';

describe('CoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreServiceService]
    });
  });

  it('should be created', inject([CoreServiceService], (service: CoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
