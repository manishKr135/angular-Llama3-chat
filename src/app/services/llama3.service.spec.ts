import { TestBed } from '@angular/core/testing';

import { Llama3Service } from './llama3.service';

describe('Llama3Service', () => {
  let service: Llama3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Llama3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
