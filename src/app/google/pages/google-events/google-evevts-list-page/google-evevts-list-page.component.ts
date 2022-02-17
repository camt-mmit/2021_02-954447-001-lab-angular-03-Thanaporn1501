import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleEventsService } from 'src/app/google/google-events.service';

@Component({
  selector: 'app-google-evevts-list-page',
  templateUrl: './google-evevts-list-page.component.html',
  styleUrls: ['./google-evevts-list-page.component.scss'],
})
export class GoogleEvevtsListPageComponent implements OnInit {
  data$!: Observable<any>;

  constructor(private readonly service: GoogleEventsService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }
}
