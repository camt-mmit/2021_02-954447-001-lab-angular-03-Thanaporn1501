import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';

const routes: Routes = [
  { path: 'authorization', component: GoogleAuthorizationPageComponent },
  {
    path: '',
    component: GoogleComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'events', component: GoogleEvevtsListPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleRoutingModule {}
