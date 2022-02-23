import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarRoutingModule } from './star-war-routing.module';
import { StarWarComponent } from './star-war/star-war.component';
import { StarWarPeopleListComponent } from './star-war-people-list/star-war-people-list.component';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StarWarPersonViewPageComponent } from './star-war-person-view-page/star-war-person-view-page.component';
import { StarWarPersonViewComponent } from './star-war-person-view/star-war-person-view.component';
import { MatIconModule } from '@angular/material/icon';
import { StarWarSpeciesListComponent } from './star-war-species-list/star-war-species-list.component';
import { StarWarSpeciesListPageComponent } from './star-war-species-list-page/star-war-species-list-page.component';
import { StarWarSpecieViewComponent } from './star-war-specie-view/star-war-specie-view.component';
import { StarWarSpecieViewPageComponent } from './star-war-specie-view-page/star-war-specie-view-page.component';
import { StarWarPlanetsListComponent } from './star-war-planets-list/star-war-planets-list.component';
import { StarWarPlanetsListPageComponent } from './star-war-planets-list-page/star-war-planets-list-page.component';
import { StarWarPlanetViewComponent } from './star-war-planet-view/star-war-planet-view.component';
import { StarWarPlanetViewPageComponent } from './star-war-planet-view-page/star-war-planet-view-page.component';


@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleListComponent,
    StarWarPeopleListPageComponent,
    StarWarPersonViewPageComponent,
    StarWarPersonViewComponent,
    StarWarSpeciesListComponent,
    StarWarSpeciesListPageComponent,
    StarWarSpecieViewComponent,
    StarWarSpecieViewPageComponent,
    StarWarPlanetsListComponent,
    StarWarPlanetsListPageComponent,
    StarWarPlanetViewComponent,
    StarWarPlanetViewPageComponent
  ],
  imports: [
    CommonModule,
    StarWarRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class StarWarModule { }
