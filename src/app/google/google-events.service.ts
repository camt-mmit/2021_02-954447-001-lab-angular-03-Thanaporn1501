import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from './google-token.service';
import {
  EventResource,
  EventsList,
  parseEventList,
  parseEventResource,
} from './models';

const eventsUrl =
  'https://www.googleapis.com/calendar/v3/calendars/primary/events';

@Injectable({
  providedIn: 'root',
})
export class GoogleEventsService {
  constructor(
    private readonly tokenService: GoogleTokenService,
    private readonly http: HttpClient,
  ) {}

  getAll(params?: { [key: string]: any }): Observable<EventsList> {
    const queryParams = { ...params };

    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        console.log(authorizationHeader);

        if (authorizationHeader) {
          return this.http.get(eventsUrl, {
            headers: {
              Authorization: authorizationHeader,
            },
            params: queryParams,
          });
        }

        return of(null);
      }),
      map((data) => parseEventList(data)),
    );
  }
  create(data: EventResource): Observable<EventResource> | null {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.post(eventsUrl, data, {
            headers: {
              Authorization: authorizationHeader,
            },
          });
        }
        return of(null);
      }),
      map((data) => parseEventResource(data)),
    );
  }
}
