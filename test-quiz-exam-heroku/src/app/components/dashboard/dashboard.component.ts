import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails: any;

  constructor(
    private userDetailService: UserDetailsService
  ) {
    this.userDetails = this.userDetailService.userDetails;
  }

  ngOnInit(): void {
    console.log(this.userDetailService.userDetails);
  }

}
