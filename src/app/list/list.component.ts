import {
    Component,
    Input,
    Injectable,
    OnInit, 
} from '@angular/core';
import {List} from '../shared/list.model';

@Component ({
    selector  :'app-list',
    styleUrls : ['./list.component.css'],
    templateUrl :'./list.component.html',
})

/**
 * List of Contents : 
 * 1- Ways to bind ui data to component (ngModel - event - local refrence)
 * 2- Custom evetns (CounterComponent)
 * 3- Lifecycle (BoxComponent)
 * 4- @input : a decorator that defines a set of parameters that can be passed (BoxComponent)
 * 5- @Output :a decorator that defines a custom event that listenable in outside (CounterComponent)
 */


export class ListComponent implements OnInit {
    ngModelItem : string;
    list : List [] = [
        new List('item1'),
        new List('item2')
    ];

    constructor (){
    }

    // Way 1 for add ui to model - using event
    add1 (event : any) {
        this.list.push({name:(<HTMLInputElement>event.target).value})
    }

    // Way 2 add ui to model - using local refrence
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
