import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  userDetails: any;

  constructor(
    private router: Router,
    private loginRegisterService: LoginRegisterService,
    private userDetailService: UserDetailsService
  ) {
    this.userDetails = this.userDetailService.userDetails;
  }

  ngOnInit(): void {

  }

  onClickLogin(location: string) {
    this.loginRegisterService.setRoute({"location": location});
    this.router.navigate([location]);
  }

  onClickHome(location: string) {
    this.router.navigate([location]);
  }

  onClickLogout() {
    this.userDetailService.clearUserDetails();
    this.router.navigate(["home"]);
  }
}
