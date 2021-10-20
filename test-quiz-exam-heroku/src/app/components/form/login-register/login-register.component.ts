import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  //boolean variables
  show: boolean = false;
  errorMessage: boolean = false;

  //string variables
  route: string = this.loginRegisterService.loginRegisterInfo.location;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private userDetailService: UserDetailsService,
    private messageService: MessageServiceService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  showPassword():void {
    this.show = !this.show;
  }

  onClickRegister(location: string): void {
    this.loginRegisterService.setRoute({"location": location});
    this.router.navigate([location]);
  }

  onLogin(): void {
    if(this.form.valid && this.validateLogin()) {
      this.errorMessage = false;
      this.setUserSession();
      this.messageService.showAppMessage("Successfully Logged In", "success");
      this.router.navigate(['dashboard']);
    } else {
      this.errorMessage = true;
    }
  }

  validateLogin(): boolean {
    return this.form.get("email")?.value === "user" && this.form.get("password")?.value === "pass" ? true : false;
  }

  setUserSession() {
    this.userDetailService.setUserDetails({
      email: this.form.get("email")?.value
    });
  }
}
