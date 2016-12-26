import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.scss';
// tslint:disable-next-line:no-unused-variable
import * as _ from 'lodash';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor () {
    /* Nothing */
  }

  ngOnInit() {
    const testVar: string = 'test';
    console.log(testVar);
  }
}
