import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormRoutingModule } from './my-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleFormPageComponent } from './simple-form-page/simple-form-page.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SimpleFormComponent,
    SimpleFormPageComponent,
    MyFormComponent,

  ],
  imports: [
    CommonModule,
    MyFormRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
  ]
})
export class MyFormModule { }
