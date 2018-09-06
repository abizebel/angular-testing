import {Component, OnInit, Input, Injectable} from '@angular/core';
import {List} from '../shared/list.model';

/**
 * List of Contents : 
 * 1- Ways to bind ui data to component (ngModel - event - local refrence in ListComponent)
 * 2- Custom evetns (CounterComponent)
 * 3- Lifecycle (BoxComponent)
 * 4- @input : a decorator that defines a set of parameters that can be passed (BoxComponent)
 * 5- @Output : a decorator that defines a custom event that listenable in outside (CounterComponent)
 * 6- Custom directives attribute type (  in highlightComponent)
 * 7- Custom directives structral type (  in isOpenDirective)
 */



@Component ({
    selector  :'app-list',
    styleUrls : ['./list.component.css'],
    templateUrl :'./list.component.html',
})




export class ListComponent implements OnInit {
    ngModelItem : string;
    list : List [] = [
        new List('item1'),
        new List('item2')
    ];

    constructor (){}

    // Way 1 for add ui to model - using event
    add1 (event : any) {
        this.list.push({name:(<HTMLInputElement>event.target).value})
    }

    // Way 2 add ui to model - using # sign
    add2 (newItem : HTMLInputElement) {
        this.list.push({name:newItem.value});
    }

    // Way 3 add ui to model - using ngModel
    add3 (){
        this.list.push({name:this.ngModelItem});
    }
    
    // This method called in "change" custom event in counter component 
    // (change)="countChange($event)"
    countChange($event) {
       console.log($event);
    }

    ngOnInit(){}
}