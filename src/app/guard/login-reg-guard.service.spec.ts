import { TestBed } from '@angular/core/testing';

import { LoginRegGuardService } from './login-reg-guard.service';

describe('LoginRegGuardService', () => {
  let service: LoginRegGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
