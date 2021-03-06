import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Bean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeBeanService(name: string) {
    return this.http.get<Bean>(`http://localhost:8080/bean/${name}`);
    //console.log("Testing bean...") 
  }
}
