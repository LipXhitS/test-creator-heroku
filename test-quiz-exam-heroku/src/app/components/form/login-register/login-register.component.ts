import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  //boolean variables
  show: boolean = false;

  //string variables
  route: string = this.loginRegisterService.loginRegisterInfo.location;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showPassword():void {
    this.show = !this.show;
  }

  onClickRegister(location: string) {
    this.loginRegisterService.setRoute({"location": location});
    this.router.navigate([location]);
  }
}
