import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  get(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  get pokemons(): Pokemon[] {
    if (this.trainerService.trainer) {
      return this.trainerService.trainer.pokemon;
    }
    return [];
  }

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {}
}
