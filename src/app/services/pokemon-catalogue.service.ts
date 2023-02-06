import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { finalize } from 'rxjs';
import { StorageUtil } from '../utils/storage.utils';
const { apiPokemons, apiImage } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  private _pokemons: Pokemon[] = [];
  private _error: string = '';
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }
  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) {}

  public findAllPokemons(): void {
    if (this._pokemons.length > 0 || this.loading) {
      return;
    }

    const storedPokemons = StorageUtil.storageRead<Pokemon[]>('pokemon-list');

    if (storedPokemons && storedPokemons.length > 0) {
      this._pokemons = storedPokemons;
      return;
    }

    this._loading = true;
    this.http
      .get<{ results: Pokemon[] }>(apiPokemons)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (response) => {
          this._pokemons = response.results;
          this.pokemons.map((item) => {
            let urlArray = item.url.split('/');
            let id = urlArray[urlArray.length - 2];
            item.image = `${apiImage}${id}.png`;
          });
          StorageUtil.storageSave<Pokemon[]>('pokemon-list', this._pokemons);
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
          console.log(this._error);
        },
      });
  }

  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
  }
}
