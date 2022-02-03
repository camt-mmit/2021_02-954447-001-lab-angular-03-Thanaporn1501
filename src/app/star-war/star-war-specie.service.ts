import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, parseSpecie, SearchData,parseSpecieList, Specie } from './models';

const url = 'https://swapi.dev/api/species/';

@Injectable({
  providedIn: 'root',
})
export class StarWarSpecieService {
  constructor(private readonly http: HttpClient) {}

  getAll(params?: SearchData): Observable<List<Specie>> {
    console.log(params);


    return this.http
      .get(url, {
        params: params,
      })
      .pipe(map((data) => parseSpecieList(data)));
  }
  get(id: string) : Observable<Specie> {
    return this.http.get(`${url}${id}/`).pipe(map((data) => parseSpecie(data)));
  }
}
