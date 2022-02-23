import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { List, Planet, SearchData } from '../models';
import { StarWarPlanetsService } from '../star-war-planets.service';


@Component({
  selector: 'app-star-war-planets-list-page',
  templateUrl: './star-war-planets-list-page.component.html',
  styleUrls: ['./star-war-planets-list-page.component.scss']
})
export class StarWarPlanetsListPageComponent implements OnInit {
  data$!: Observable<List<Planet>>;
  search!: SearchData;

  constructor(
    private readonly service: StarWarPlanetsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.search = this.route.snapshot.queryParams;
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.search = params;
        return this.service.getAll(params);
      })
    );
  }

  onSearch(search:SearchData):void{
    this.router.navigate([],{
      relativeTo: this.route,
      queryParams: search,
      replaceUrl: true,
    });
  }
  onItemSelect(id: string):void{
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
