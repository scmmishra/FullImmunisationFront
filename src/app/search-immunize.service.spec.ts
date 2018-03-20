import { TestBed, inject } from '@angular/core/testing';

import { SearchImmunizeService } from './search-immunize.service';

describe('SearchImmunizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchImmunizeService]
    });
  });

  it('should be created', inject([SearchImmunizeService], (service: SearchImmunizeService) => {
    expect(service).toBeTruthy();
  }));
});
