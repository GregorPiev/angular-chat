import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';

import { AppComponent } from './app.component';
// import { ArticleComponent } from './article/components/article/article.component';
// import { CommentsComponent } from './article/components/comments/comments.component';
import { environment } from 'src/environments/environment';


import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthInterceptor } from 'src/app/shared/services/authinterceptor.service';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { YourFeedModule } from 'src/app/yourFeed/yourFeed.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { ArticleModule } from 'src/app/article/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
