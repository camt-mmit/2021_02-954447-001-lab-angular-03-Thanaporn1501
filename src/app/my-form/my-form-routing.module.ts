import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { SimpleFormPageComponent } from './simple-form-page/simple-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyFormComponent,
    children: [
      { path: '', redirectTo: 'simple-form', pathMatch: 'full' },
      { path: 'simple-form', component: SimpleFormPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFormRoutingModule {}
