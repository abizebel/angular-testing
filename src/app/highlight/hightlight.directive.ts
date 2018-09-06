import {Directive, ElementRef, OnInit, HostListener, HostBinding, Renderer2} from '@angular/core';
/**
 * Directive Concepts
 * 1- Define attribute directive
 * 2- @HostBinding
 * 3- @HostListener
 * 4- Renderer
 * 5- Access to dom with ElementRef
 * 6- Three Way to change dom in directive (renderer , ElementRef, ostBinding)
 */


@Directive ({
    selector : '[appHightlight]'
})

export class HightlightDirective implements OnInit{
    constructor (private elementRef : ElementRef, private renderer : Renderer2){
       
    }

    /**
     * he @HostBinding() function decorator allows you to set the properties of 
     * the host element from the directive class
     */
    @HostBinding('style.backgroundColor') backgroundColor : string

    /**
     * @HostListener() function decorator allows you to handle 
     * events of the host element in the directive class
     */
    //   
    @HostListener('click') click (eventData : Event) {
        alert('@HostListener on appHightlight directive with click event');
        this.backgroundColor = 'blue'
    }

    ngOnInit() {
        /**
         * When using @HostBinding "this.elementRef" Dosent work
         */
        this.elementRef.nativeElement.style.backgroundColor = 'red';

        this.renderer.setStyle (this.elementRef.nativeElement, 'color', 'pink')
    }
}