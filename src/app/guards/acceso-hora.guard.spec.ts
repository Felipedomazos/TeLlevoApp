import { TestBed } from '@angular/core/testing';

import { AccesoHoraGuard } from './acceso-hora.guard';

describe('AccesoHoraGuard', () => {
  let guard: AccesoHoraGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesoHoraGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
