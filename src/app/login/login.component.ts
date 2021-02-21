import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='shrey'
  password='notshrey'
  errorMessage='Invalid Credentials'
  invalidLogin=false

  //Router


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    if(this.username === 'shrey' && this.password==='notshrey') {

      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false

    }
    else
      this.invalidLogin=true
  }

}
