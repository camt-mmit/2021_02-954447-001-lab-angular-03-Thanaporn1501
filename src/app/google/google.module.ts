import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GoogleEvevtsListPageComponent,
    GoogleComponent,
    GoogleAuthorizationPageComponent,
  ],
  imports: [CommonModule, GoogleRoutingModule, MatIconModule],
})
export class GoogleModule {}
