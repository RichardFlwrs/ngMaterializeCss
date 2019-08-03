import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeESMX from '@angular/common/locales/es-MX';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { PagesComponent } from './pages/pages.component';

registerLocaleData(localeESMX);

@NgModule({
  declarations: [AppComponent, PagesComponent],
  imports: [BrowserModule, AppRoutesModule, SharedModule, CoreModule, HttpClientModule],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-mx' }, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
