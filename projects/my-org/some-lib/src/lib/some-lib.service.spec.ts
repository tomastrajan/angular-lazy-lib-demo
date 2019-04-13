import { TestBed } from '@angular/core/testing';

import { SomeLibService } from './some-lib.service';

describe('SomeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeLibService = TestBed.get(SomeLibService);
    expect(service).toBeTruthy();
  });
});
