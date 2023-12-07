import { TestBed } from '@angular/core/testing';

import { EmbaucheservService } from './embaucheserv.service';

describe('EmbaucheservService', () => {
  let service: EmbaucheservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbaucheservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
