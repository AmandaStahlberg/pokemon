import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();
  constructor(
    private readonly loginService: LoginService,
    private readonly trainerService: TrainerService
  ) {}

  private _error: string = '';

  public errorMessage: boolean = false;

  public loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;
    console.log(username);
    if (!username || !/^\S/.test(username.trim())) {
      this.errorMessage = true;
      return;
    }
    this.errorMessage = false;

    this.loginService.login(username).subscribe({
      next: (trainer: Trainer) => {
        this.trainerService.trainer = trainer;
        this.login.emit();
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
        console.log(this._error);
      },
    });
  }
}
