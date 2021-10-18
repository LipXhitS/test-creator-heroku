import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(window.screen.width);
    this.isMobile = window.screen.width <= 480 ? true : false;
    console.log(this.isMobile);
  }

}
