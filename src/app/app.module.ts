import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';
import { appEffects, appReducer } from './domain/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './core/interceptors/app.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs, 'es')

//Mensages
import { NotifierModule, NotifierOptions } from 'angular-notifier';
/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle'
		},
		vertical: {
			position: 'top',
			distance: 70,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 3
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 400,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 30}),
    EffectsModule.forRoot(appEffects),
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


