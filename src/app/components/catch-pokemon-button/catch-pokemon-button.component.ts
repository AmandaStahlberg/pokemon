import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CatchPokemonService } from 'src/app/services/catch-pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catch-pokemon-button',
  templateUrl: './catch-pokemon-button.component.html',
  styleUrls: ['./catch-pokemon-button.component.css'],
})
export class CatchPokemonButtonComponent implements OnInit {
  public loading: boolean = false;
  public isCatched: boolean = false;
  @Input() pokemonName: string = '';

  // get loading(): boolean {
  //   return this.catchPokemonService.loading;
  // }

  constructor(
    private trainerService: TrainerService,
    private readonly catchPokemonService: CatchPokemonService
  ) {}

  ngOnInit(): void {
    this.isCatched = this.trainerService.inPokemons(this.pokemonName);
  }

  onCatchClick(): void {
    this.loading = true;
    if (this.pokemonName === 'pikachu') {
      console.log('nicetry');
      return;
    } else {
      this.catchPokemonService.addToPokemons(this.pokemonName).subscribe({
        next: (trainer: Trainer) => {
          this.loading = false;
          this.isCatched = this.trainerService.inPokemons(this.pokemonName);
          console.log('NEXT', trainer);
        },
        error: (error: HttpErrorResponse) => {
          console.log('ERROR', error.message);
        },
      });
    }
  }
}
