import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }

  public inPokemons(pokemonName: string): boolean {
    // console.log('hej');
    if (this._trainer) {
      // console.log(this._trainer);
      return Boolean(
        this.trainer?.pokemon.find(
          (pokemon: Pokemon) => pokemon.name === pokemonName
        )
      );
    }
    return false;
  }

  public addToPokemons(pokemon: Pokemon): void {
    if (this._trainer) {
      this._trainer.pokemon.push(pokemon);
    }
  }

  public removeFromPokemons(pokemonName: string): void {
    if (this._trainer) {
      this._trainer.pokemon = this._trainer.pokemon.filter(
        (pokemon: Pokemon) => pokemon.name !== pokemonName
      );
    }
  }
}
