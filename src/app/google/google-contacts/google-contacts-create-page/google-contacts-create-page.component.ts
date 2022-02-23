import { Component, OnInit } from '@angular/core';
import { GoogleContactsService } from '../../google-contacts.service';
import { PersonResource } from '../../models';

@Component({
  selector: 'app-google-contacts-create-page',
  templateUrl: './google-contacts-create-page.component.html',
  styleUrls: ['./google-contacts-create-page.component.scss'],
})
export class GoogleContactsCreatePageComponent implements OnInit {
  constructor(private readonly service: GoogleContactsService) {}

  ngOnInit(): void {
    return;
  }

  onChange(data: PersonResource): void {
    console.log(data);
    this.service.create(data)?.subscribe((data: any) => {
      history.back();
    });
  }

  onCancel() {
    history.back();
  }
}
