import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';
import { appEffects, appReducer } from './domain/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 30}),
    EffectsModule.forRoot(appEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
