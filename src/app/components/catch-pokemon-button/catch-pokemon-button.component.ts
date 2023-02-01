import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CatchPokemonService } from 'src/app/services/catch-pokemon.service';

@Component({
  selector: 'app-catch-pokemon-button',
  templateUrl: './catch-pokemon-button.component.html',
  styleUrls: ['./catch-pokemon-button.component.css'],
})
export class CatchPokemonButtonComponent implements OnInit {
  @Input() pokemonName: string = '';

  get loading(): boolean {
    return this.catchPokemonService.loading;
  }

  constructor(private readonly catchPokemonService: CatchPokemonService) {}

  ngOnInit(): void {}

  onCatchClick(): void {
    this.catchPokemonService.addToPokemons(this.pokemonName).subscribe({
      next: (response: Trainer) => {
        console.log('NEXT', response);
      },
      error: (error: HttpErrorResponse) => {
        console.log('ERROR', error.message);
      },
    });
  }
}
