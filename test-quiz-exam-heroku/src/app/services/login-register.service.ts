import { Injectable } from '@angular/core';
import { JsonDataService } from './json-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  loginRegisterInfo: any;

  constructor(
    private jsonDataService: JsonDataService
  ) {
    this.loginRegisterInfo = JSON.parse(this.jsonDataService.retrieveFromStorage("loginRegisterInfo")) || this.loginRegisterInfo;
  }

  setRoute(value: any): void {
    this.loginRegisterInfo = value === "" ? {} : value;
    this.jsonDataService.saveToStorage("loginRegisterInfo", value);
  }
}
