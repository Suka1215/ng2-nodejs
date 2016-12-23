import { Component, ElementRef, OnInit } from '@angular/core';
import '../../../public/css/styles.scss';
import * as _ from 'lodash';
import * as jquery from 'jquery';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
    
    elementRef: ElementRef
    
    constructor(private _element: ElementRef) { }

    ngOnInit() {
        jquery('body').addClass('red');
     }
}