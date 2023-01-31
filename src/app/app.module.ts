import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { PokemonCatalogueComponent } from './pages/pokemon-catalogue/pokemon-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ProfilePage,
    PokemonCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
