import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Planet } from '../models';
import { StarWarPlanetsService } from '../star-war-planets.service';

@Component({
  selector: 'app-star-war-planet-view-page',
  templateUrl: './star-war-planet-view-page.component.html',
  styleUrls: ['./star-war-planet-view-page.component.scss']
})
export class StarWarPlanetViewPageComponent implements OnInit {
  data$! : Observable<Planet>;

  constructor(
    private readonly service : StarWarPlanetsService,
    private readonly route : ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.data$ = this.route.params.pipe(
      switchMap((params) => this.service.get(params['id']))
    );
  }
  goBack(): void {
    history.back();
  }
}
