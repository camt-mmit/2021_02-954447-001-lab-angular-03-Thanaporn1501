import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import {
  List,
  parsePlanet,
  parsePlanetList,
  Planet,
  SearchData,
} from './models';

const url = 'https://swapi.dev/api/planets/';

@Injectable({
  providedIn: 'root',
})
export class StarWarPlanetsService {
  constructor(private readonly http: HttpClient) {}

  getAll(params?: SearchData): Observable<List<Planet>> {
    return this.http
      .get(url, {
        params: params,
      })
      .pipe(map((data) => parsePlanetList(data)));
  }
  get(id: string): Observable<Planet> {
    return this.http.get(`${url}${id}/`).pipe(map((data) => parsePlanet(data)));
  }
}
