import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  constructor(
    private router: Router,
    private loginRegisterService: LoginRegisterService
  ) { }

  ngOnInit(): void {
    console.log(window.screen.width);
    this.isMobile = window.screen.width <= 480 ? true : false;
    console.log(this.isMobile);
  }

  onClickLogin(location: string) {
    this.loginRegisterService.setRoute({"location": location});
    this.router.navigate([location]);
  }

  onClickHome(location: string) {
    this.router.navigate([location]);
  }
}
