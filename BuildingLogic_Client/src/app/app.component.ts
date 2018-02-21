
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    // on onInit method call the core serice to load loged in user data if no authorised user redirect to login page
  // initialise  and display the dashboard component
}
