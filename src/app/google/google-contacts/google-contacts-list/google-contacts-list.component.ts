import { Component, Input, OnInit } from '@angular/core';
import { ConnectionsList } from '../../models';

@Component({
  selector: 'app-google-contacts-list',
  templateUrl: './google-contacts-list.component.html',
  styleUrls: ['./google-contacts-list.component.scss'],
})
export class GoogleContactsListComponent implements OnInit {
  @Input() data: ConnectionsList | null = null;
  constructor() {}

  ngOnInit(): void {
    return;
  }
}
