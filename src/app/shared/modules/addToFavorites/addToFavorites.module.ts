import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';
import { HttpClientModule } from '@angular/common/http';
import { AddToFavoritesService } from './addToFavorites.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from 'src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([AddToFavoritesEffect])
  ],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService]


})

export class AddToFavoritesModule { }
