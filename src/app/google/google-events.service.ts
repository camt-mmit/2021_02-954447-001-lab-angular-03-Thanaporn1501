import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { GoogleTokenService } from './google-token.service';

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

  getAll(): Observable<any> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) => {
        if (authorizationHeader) {
          return this.http.get(eventsUrl, {
            headers: {
              Authorization: authorizationHeader,
            },
          });
        }

        return of(null);
      }),
    );
  }
}
