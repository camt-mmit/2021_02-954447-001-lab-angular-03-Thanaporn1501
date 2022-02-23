import { Injectable } from '@angular/core';
import { List, parsePeopleList, Person } from './models';

const url ='https://swapi.dev/api/people/';

@Injectable({
  providedIn: 'root'
})
export class StarWarPeopleFetchService {

  constructor() { }

  async getAll(): Promise<List<Person>> {
    const res = await fetch(url);
    const data = await res.json();
    return parsePeopleList(data);
  }
}
