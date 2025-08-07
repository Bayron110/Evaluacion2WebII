import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSesison } from './cerrar-sesison';

describe('CerrarSesison', () => {
  let component: CerrarSesison;
  let fixture: ComponentFixture<CerrarSesison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerrarSesison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarSesison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
