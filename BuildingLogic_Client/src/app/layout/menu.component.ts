import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 color: String = 'red';
  constructor(private _router: Router) { }

  ngOnInit() {
  }
 activeLinkColor(activelink): String {
      if (activelink === this._router.url) {
        return '#E44424';
      }
 }
}
