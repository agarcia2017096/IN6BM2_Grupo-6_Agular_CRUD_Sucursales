import { TestBed } from '@angular/core/testing';

import { CargarJavascriptService } from './cargar-javascript.service';

describe('CargarJavascriptService', () => {
  let service: CargarJavascriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarJavascriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
