import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive ({
    selector : '[appHightlight]'
})

export class HightlightDirective implements OnInit{
    constructor (private elementRef : ElementRef){
       
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
}