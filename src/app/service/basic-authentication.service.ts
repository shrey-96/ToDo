import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username,password) {
    //console.log('before: ' + this.isUserLoggedIn())

    if(username === 'user' && password==='password') {
      sessionStorage.setItem('authenticatedUser', username);

      return true;
    }
    else {
      return false;
    }
  }

  executeAuthenticationService(username,password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

    let headers = new HttpHeaders ( {
      Authorization: basicAuthHeaderString

    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers}).pipe (
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          return data;
        } 
      )
    );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }

}
