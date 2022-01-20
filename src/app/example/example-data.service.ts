import { Injectable } from '@angular/core';

export type ExampleItem = { value: number };
export type ExampleSection = ExampleItem[];
export type ExampleData = ExampleSection[];

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService {
  private data: ExampleData;

  constructor() {
    let textData = localStorage.getItem('example');
    if (textData) {
      this.data = JSON.parse(textData);
    } else {
      this.data = [[{ value: 0 }]];
    }
  }

  private updateStorage(): void {
    localStorage.setItem('example', JSON.stringify(this.data));
  }

  addItem(sectionIndex: number): void {
    this.data[sectionIndex].push({ value: 0 });
    this.updateStorage();
  }

  updateItem(sectionIndex:number, index:number, value:number): void{
    this.data[sectionIndex][index].value = value;
    this.updateStorage();
  }
  removeItem(sectionIndex: number, index: number): void {
    this.data[sectionIndex].splice(index, 1);
    this.updateStorage();
  }

  addSection(): void {
    this.data.push([{ value: 0 }]);
    this.updateStorage();
  }

  removeSection(sectionIndex: number): void {
    this.data.splice(sectionIndex, 1);
    this.updateStorage();
  }

  getData(): ExampleData {
    return this.data;
  }
}
