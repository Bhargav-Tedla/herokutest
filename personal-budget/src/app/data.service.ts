import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any;

  constructor(public http: HttpClient) {

  }
  getData(): any{
    return this.http.get('http://localhost:3000/budget');
   }


}

