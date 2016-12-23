import { el } from '@angular/platform-browser/testing/browser_util';
import { Component, ElementRef, OnInit } from '@angular/core';
import '../../../public/css/styles.scss';
import * as _ from 'lodash';
import * as jquery from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    
    elementRef: ElementRef
    
    constructor(private _element: ElementRef) { }

    ngOnInit() {
        jquery('body').addClass('red');
     }
}