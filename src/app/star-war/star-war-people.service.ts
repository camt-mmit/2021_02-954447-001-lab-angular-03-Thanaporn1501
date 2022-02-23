import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, parsePeopleList, parsePerson, Person, SearchData } from './models';

const url = 'https://swapi.dev/api/people/';

@Injectable({
  providedIn: 'root',
})
export class StarWarPeopleService {
  constructor(private readonly http: HttpClient) {}

  getAll(params?: SearchData): Observable<List<Person>> {
    return this.http
      .get(url, {
        params: params,
      })
      .pipe(map((data) => parsePeopleList(data)));
  }
  get(id: string) : Observable<Person> {
    return this.http.get(`${url}${id}/`).pipe(map((data) => parsePerson(data)));
  }
}
