import { TestBed } from '@angular/core/testing';

import { UserLibService } from './user-lib.service';

describe('UserLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLibService = TestBed.get(UserLibService);
    expect(service).toBeTruthy();
  });
});
