import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';

const { apiKey, apiTrainers } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatchPokemonService {
  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService
  ) {}

  // change this to Id and not name when we have id on pokemons
  public addToPokemons(pokemonName: string): Observable<Trainer> {
    if (!this.trainerService.trainer) {
      throw new Error('addToPokemons: No trainer found');
    }
    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined =
      this.pokemonService.pokemonByName(pokemonName);

    if (!pokemon) {
      throw new Error('addToPokemons: No pokemon with name: ' + pokemonName);
    }

    if (this.trainerService.inPokemons(pokemonName)) {
      this.trainerService.removeFromPokemons(pokemonName);
    } else {
      this.trainerService.addToPokemons(pokemon);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });

    this._loading = true;

    return this.http
      .patch<Trainer>(
        `${apiTrainers}/${trainer.id}`,
        {
          pokemon: [...trainer.pokemon],
        },
        { headers }
      )
      .pipe(
        tap((updatedTrainer: Trainer) => {
          this.trainerService.trainer = updatedTrainer;
        }),
        finalize(() => {
          this._loading = false;
        })
      );
  }
}
