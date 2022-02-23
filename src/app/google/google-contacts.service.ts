import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';

import { GoogleTokenService } from './google-token.service';
import {
  ConnectionsList,
  parseConnectionsList,
  Person,
  PersonResource,
} from './models';

const contactsUrl =
  'https://people.googleapis.com/v1/people/me/connections?personFields=names,phoneNumbers,emailAddresses,photos';
const contactsCreateUrl =
  'https://people.googleapis.com/v1/people:createContact?personFields=names&sources=READ_SOURCE_TYPE_CONTACT';

@Injectable({
  providedIn: 'root',
})
export class GoogleContactsService {
  constructor(
    private readonly tokenService: GoogleTokenService,
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<ConnectionsList> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.get(contactsUrl, {
            headers: {
              Authorization: authorizationHeader,
            },
          });
        }
        return of(null);
      }),
      map((data) => parseConnectionsList(data)),
    );
  }

  create(data: any): any {
    this.tokenService
      .getAuthorizationHeader()
      .subscribe((token) => console.log(token));
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.post(
            contactsCreateUrl,
            {
              names: [
                { givenName: data.givenName, familyName: data.familyName },
              ],
              phoneNumbers: data.phoneNumbers,
              emailAddresses: data.emailAddresses,
            },

            {
              headers: {
                Authorization: authorizationHeader,
              },
            },
          );
        }
        return of(null);
      }),
    );
  }
}
