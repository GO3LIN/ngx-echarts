import { TestBed } from '@angular/core/testing';

import { NgxEchartsLibService } from './ngx-echarts-lib.service';

describe('NgxEchartsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEchartsLibService = TestBed.get(NgxEchartsLibService);
    expect(service).toBeTruthy();
  });
});
