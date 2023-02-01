import { Component } from '@angular/core';
import { StorageKeys } from 'src/app/enums/storage-keys.enum';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';
import { StorageUtil } from 'src/app/utils/storage.utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  constructor(private readonly trainerService: TrainerService) {}

  public handleLogout(): void {
    StorageUtil.storageRemove(StorageKeys.Trainer);
    window.location.reload();
  }
}
