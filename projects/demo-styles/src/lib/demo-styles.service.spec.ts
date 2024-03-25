import { TestBed } from '@angular/core/testing';

import { DemoStylesService } from './demo-styles.service';

describe('DemoStylesService', () => {
  let service: DemoStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
