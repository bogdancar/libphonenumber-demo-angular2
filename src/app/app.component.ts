import { Component, OnInit } from '@angular/core';
import { parse, format, asYouType } from 'libphonenumber-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  asYouType: any;
  format: any;
  parse: any;

  ngOnInit() {
    this.asYouType = new asYouType('US').input('2133734');
    this.format = format('2133734253', 'US', 'International');
    this.parse = parse('(0777) 844 822', 'RO');
  }

}
