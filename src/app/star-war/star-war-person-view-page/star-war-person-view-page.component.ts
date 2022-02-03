import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Person } from '../models';
import { StarWarPeopleService } from '../star-war-people.service';

@Component({
  selector: 'app-star-war-person-view-page',
  templateUrl: './star-war-person-view-page.component.html',
  styleUrls: ['./star-war-person-view-page.component.scss']
})
export class StarWarPersonViewPageComponent implements OnInit {

  data$! : Observable<Person>;

  constructor(
    private readonly service : StarWarPeopleService,
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
