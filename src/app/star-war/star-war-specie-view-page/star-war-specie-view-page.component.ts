import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Specie } from '../models';
import { StarWarSpecieService } from '../star-war-specie.service';

@Component({
  selector: 'app-star-war-specie-view-page',
  templateUrl: './star-war-specie-view-page.component.html',
  styleUrls: ['./star-war-specie-view-page.component.scss']
})
export class StarWarSpecieViewPageComponent implements OnInit {
  data$! : Observable<Specie>;

  constructor(
    private readonly service : StarWarSpecieService,
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
