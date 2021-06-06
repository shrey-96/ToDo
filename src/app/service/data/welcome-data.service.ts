import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders ( {
      Authorization: basicAuthHeaderString

    })

    return this.http.get<Bean>(`http://localhost:8080/bean/${name}`,
    {headers});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

    return basicAuthHeaderString;
  }
}
