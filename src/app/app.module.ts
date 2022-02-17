import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GoogleConfigurationToken } from './google/models';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  providers: [
    {
      provide: GoogleConfigurationToken,
      useValue: environment.googleConfiguration,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
