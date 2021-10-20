import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMobile: boolean = false;

  userDetails: any;

  constructor(
    private userDetailService: UserDetailsService
    ) {
      this.userDetails = this.userDetailService.userDetails;
    }

  ngOnInit(): void {
    this.isMobile = window.screen.width <= 480 ? true : false;
  }

}
