import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mobile = window.screen.width <= 480 ? true : false;
  }

}
