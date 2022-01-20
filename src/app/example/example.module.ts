import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleInputContainerComponent } from './example-input-container/example-input-container.component';
import { ExampleSectionContainerComponent } from './example-section-container/example-section-container.component';
import { ExampleComponent } from './example/example.component';
import { ExampleInputPageComponent } from './example-input-page/example-input-page.component';
import { ExampleDisplayPageComponent } from './example-display-page/example-display-page.component';
import { ExampleDisplaySectionPageComponent } from './example-display-section-page/example-display-section-page.component';

@NgModule({
  declarations: [
    ExampleInputContainerComponent,
    ExampleSectionContainerComponent,
    ExampleComponent,
    ExampleInputPageComponent,
    ExampleDisplayPageComponent,
    ExampleDisplaySectionPageComponent,
  ],
  imports: [CommonModule, ExampleRoutingModule, MatIconModule],
})
export class ExampleModule {}
