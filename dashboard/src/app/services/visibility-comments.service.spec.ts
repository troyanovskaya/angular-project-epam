import { TestBed } from '@angular/core/testing';

import { VisibilityCommentsService } from './visibility-comments.service';

describe('VisibilityCommentsService', () => {
  let service: VisibilityCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
