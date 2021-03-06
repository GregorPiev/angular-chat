import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { RegisterComponent } from './components/register/register.component';
import { reducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { LoginComponent } from './components/login/login.component';
import { LoginEffects } from './store/effects/login.effect';
import { GetCurrentUserEffects } from 'src/app/auth/store/effects/getCurrentUser.effects';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffects, LoginEffects, GetCurrentUserEffects])
  ],
  providers: [
    AuthService,
    PersistanceService
  ]
})
export class AuthModule { }
