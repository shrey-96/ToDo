import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from "./../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='Some welcome message'
  welcomeMessageFromService=''
  name=''
  // ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name']
    //this.getWelcomeMessage()
  }

  getWelcomeMessage() {
    console.log(this.service.executeBeanService(this.name))
    this.service.executeBeanService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )

    console.log("checking the next line")
  }

  handleSuccessfulResponse(response) {
    //console.log(response)
    this.welcomeMessageFromService=response.message
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService=error.error.message
  }

}
