import { TestBed } from '@angular/core/testing';

import { InputNameService } from './input-name.service';

describe('InputNameService', () => {
  let service: InputNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
