import { Injectable } from '@angular/core';
import { SimpleFormData } from './simple-form/simple-form.component';

@Injectable({
  providedIn: 'root',
})
export class SimpleFormDataService {
  private data: SimpleFormData;

  constructor() {
    let textData = localStorage.getItem('my-form');
    if (textData) {
      this.data = JSON.parse(textData);
    } else {
      this.data ={};
    }
  }
  //localStorage/application -> inspect on browser
  private updateStorage(): void {
    localStorage.setItem('my-form', JSON.stringify(this.data));
    console.log(this.data);
  }
  update(data: SimpleFormData): void {
    this.data = data;
    this.updateStorage();
  }
  getData(): SimpleFormData {
    return this.data;
  }
}
