import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { MatIconModule } from '@angular/material/icon';
import { GoogleUiModule } from './google-ui.module';
import { GoogleContactsListPageComponent } from './pages/google-contacts/google-contacts-list-page/google-contacts-list-page.component';
import { GoogleContactsListComponent } from './google-contacts/google-contacts-list/google-contacts-list.component';
import { GoogleContactsFormComponent } from './google-contacts/google-contacts-form/google-contacts-form.component';
import { GoogleContactsControlComponent } from './google-contacts/google-contacts-control/google-contacts-control.component';
import { GoogleContactsCreatePageComponent } from './google-contacts/google-contacts-create-page/google-contacts-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GoogleEvevtsListPageComponent,
    GoogleComponent,
    GoogleAuthorizationPageComponent,
    GoogleContactsListPageComponent,
    GoogleContactsListComponent,
    GoogleContactsFormComponent,
    GoogleContactsControlComponent,
    GoogleContactsCreatePageComponent,
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule,
    MatIconModule,
    GoogleUiModule,
    ReactiveFormsModule,
  ],
})
export class GoogleModule {}
