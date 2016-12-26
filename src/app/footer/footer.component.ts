import { Component, ElementRef, OnInit } from '@angular/core';
import '../../../public/css/styles.scss';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

    elementRef: ElementRef;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        /* Nothing */
    }
}
