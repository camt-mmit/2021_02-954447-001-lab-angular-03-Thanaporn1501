import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { List, SearchData, Specie } from '../models';
import { StarWarSpecieService } from '../star-war-specie.service';


@Component({
  selector: 'app-star-war-species-list-page',
  templateUrl: './star-war-species-list-page.component.html',
  styleUrls: ['./star-war-species-list-page.component.scss']
})
export class StarWarSpeciesListPageComponent implements OnInit {
  data$!: Observable<List<Specie>>;
  search!: SearchData;

  constructor(
    private readonly service: StarWarSpecieService,
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
