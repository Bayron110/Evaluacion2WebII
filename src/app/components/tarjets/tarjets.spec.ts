import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjets } from './tarjets';

describe('Tarjets', () => {
  let component: Tarjets;
  let fixture: ComponentFixture<Tarjets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarjets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
