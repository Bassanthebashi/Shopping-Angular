import { TestBed } from '@angular/core/testing';

import { PagesGuardService } from './pages-guard.service';

describe('PagesGuardService', () => {
  let service: PagesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
