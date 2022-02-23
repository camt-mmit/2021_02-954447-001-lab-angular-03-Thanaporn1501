import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDisplayPageComponent } from './example-display-page/example-display-page.component';
import { ExampleDisplaySectionPageComponent } from './example-display-section-page/example-display-section-page.component';
import { ExampleInputPageComponent } from './example-input-page/example-input-page.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [
      {
        path: '',
        redirectTo: 'input',
        pathMatch: 'full',
      },
      {
        path: 'input',
        component: ExampleInputPageComponent,
      },
      {
        path: 'display',
        component: ExampleDisplayPageComponent,
      },
      {
        path: 'display/:sectionIndex',
        component: ExampleDisplaySectionPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
