import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchPokemonButtonComponent } from './catch-pokemon-button.component';

describe('CatchPokemonButtonComponent', () => {
  let component: CatchPokemonButtonComponent;
  let fixture: ComponentFixture<CatchPokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchPokemonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchPokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
