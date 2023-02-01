import { Injectable } from '@angular/core';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';

@Injectable({
  providedIn: 'root',
})
export class CatchPokemonService {
  constructor(
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService
  ) {}
}
