import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
import { StarWarPersonViewPageComponent } from './star-war-person-view-page/star-war-person-view-page.component';
import { StarWarPlanetViewPageComponent } from './star-war-planet-view-page/star-war-planet-view-page.component';
import { StarWarPlanetsListPageComponent } from './star-war-planets-list-page/star-war-planets-list-page.component';
import { StarWarSpecieViewPageComponent } from './star-war-specie-view-page/star-war-specie-view-page.component';
import { StarWarSpeciesListPageComponent } from './star-war-species-list-page/star-war-species-list-page.component';
import { StarWarComponent } from './star-war/star-war.component';

const routes: Routes = [
  {path: '', component: StarWarComponent, children: [
    {path: '',redirectTo: 'people', pathMatch: 'full'},
    {path: 'people',component: StarWarPeopleListPageComponent},
    {path: 'people/:id',component:StarWarPersonViewPageComponent},

    {path: '',redirectTo:'specie',pathMatch: 'full'},
    {path: 'specie', component:StarWarSpeciesListPageComponent},
    {path: 'specie/:id',component:StarWarSpecieViewPageComponent},

    {path: '',redirectTo: 'planet', pathMatch: 'full'},
    {path: 'planet', component:StarWarPlanetsListPageComponent},
    {path: 'planet/:id', component:StarWarPlanetViewPageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarRoutingModule { }
