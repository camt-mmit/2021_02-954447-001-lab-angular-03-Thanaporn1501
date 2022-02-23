import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleEventsListComponent } from './google-events/google-events-list/google-events-list.component';
import { GoogleEventsControlComponent } from './google-events/google-events-control/google-events-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleEventsFormComponent } from './google-events/google-events-form/google-events-form.component';
import { GoogleEventCreatePageComponent } from './google-events/google-event-create-page/google-event-create-page.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GoogleEventsListComponent,
    GoogleEventsControlComponent,
    GoogleEventsFormComponent,
    GoogleEventCreatePageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  exports: [
    GoogleEventsListComponent,
    GoogleEventsControlComponent,
    GoogleEventsFormComponent,
    GoogleEventCreatePageComponent,
  ],
})
export class GoogleUiModule {}
