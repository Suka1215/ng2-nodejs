import { Component, ElementRef, OnInit } from '@angular/core';
import '../../../public/css/styles.scss';
import * as _ from 'lodash';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

    elementRef: ElementRef;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        /* Nothing */
        console.log('version', _.VERSION);
    }
}
