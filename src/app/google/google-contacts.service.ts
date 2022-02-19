import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from './google-token.service';
import { ContactsList, parseContactsList } from './models';

const contactsUrl =
  'https://people.googleapis.com/v1/people/me/connections?personFields=addresses';

@Injectable({
  providedIn: 'root',
})
export class GoogleContactsService {
  constructor(
    private readonly tokenService: GoogleTokenService,
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<ContactsList> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          console.log(authorizationHeader);

          return this.http.get(contactsUrl, {
            headers: {
              Authorization: authorizationHeader,
            },
          });
        }
        return of(null);
      }),
      map((data) => parseContactsList(data)),
    );
  }
}
