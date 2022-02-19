import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleContactsService } from 'src/app/google/google-contacts.service';
import { ContactsList } from 'src/app/google/models';

@Component({
  selector: 'app-google-contacts-list-page',
  templateUrl: './google-contacts-list-page.component.html',
  styleUrls: ['./google-contacts-list-page.component.scss'],
})
export class GoogleContactsListPageComponent implements OnInit {
  data$!: Observable<ContactsList>;

  constructor(private readonly service: GoogleContactsService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAll();
  }
}
