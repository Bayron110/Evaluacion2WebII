import { TestBed } from '@angular/core/testing';

import { CursosCrear } from './cursos-crear';

describe('CursosCrear', () => {
  let service: CursosCrear;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosCrear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
