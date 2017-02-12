/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemDataService } from './item-data.service';

describe('ItemDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDataService]
    });
  });

  it('should ...', inject([ItemDataService], (service: ItemDataService) => {
    expect(service).toBeTruthy();
  }));
});
