import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from './../../app.constants'

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
    return this.http.get<Bean>(`${API_URL}/bean/${name}`)
  }
}
