import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { MatIconModule } from '@angular/material/icon';
import { GoogleUiModule } from './google-ui.module';
import { GoogleContactsListPageComponent } from './pages/google-contacts/google-contacts-list-page/google-contacts-list-page.component';

@NgModule({
  declarations: [
    GoogleEvevtsListPageComponent,
    GoogleComponent,
    GoogleAuthorizationPageComponent,
    GoogleContactsListPageComponent,
  ],
  imports: [CommonModule, GoogleRoutingModule, MatIconModule, GoogleUiModule],
})
export class GoogleModule {}
