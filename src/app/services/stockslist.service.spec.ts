import { TestBed } from '@angular/core/testing';

import { StockslistService } from './stockslist.service';

describe('StockslistService', () => {
  let service: StockslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
