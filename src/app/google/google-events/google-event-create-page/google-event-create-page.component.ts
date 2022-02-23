import { Component, OnInit } from '@angular/core';
import { GoogleEventsService } from '../../google-events.service';
import { EventResource } from '../../models';

@Component({
  selector: 'app-google-event-create-page',
  templateUrl: './google-event-create-page.component.html',
  styleUrls: ['./google-event-create-page.component.scss'],
})
export class GoogleEventCreatePageComponent implements OnInit {
  constructor(private readonly service: GoogleEventsService) {}

  ngOnInit(): void {
    return;
  }

  onChange(data: EventResource): void {
    this.service.create(data)?.subscribe((data) => {
      history.back();
    });
  }

  onCancel() {
    history.back();
  }
}
