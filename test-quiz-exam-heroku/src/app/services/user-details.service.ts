import { Injectable } from '@angular/core';
import { JsonDataService } from './json-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userDetails: any = {
    email: ""
  };

  constructor(
    private jsonDataService: JsonDataService
  ) {
    this.userDetails = JSON.parse(this.jsonDataService.retrieveFromStorage("userDetails")) || this.userDetails;
  }

  setUserDetails(value: any): void {
    this.userDetails = value === "" ? {} : value;
    this.jsonDataService.saveToStorage("userDetails", value);
  }

  clearUserDetails(): void {
    this.jsonDataService.clearStorage("userDetails");
  }
}
