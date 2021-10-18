import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = window.screen.width <= 480 ? true : false;
  }

}
