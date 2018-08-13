import {Component, OnInit, Input} from '@angular/core';
import {List} from '../shared/list.model';

@Component ({
    selector  :'app-list',
    styleUrls : ['./list.component.css'],
    templateUrl :'./list.component.html',
})




export class ListComponent implements OnInit {

    list : List [] = [
        new List('item1'),
        new List('item2')
    ];
    constructor (){}
    reset (listData){
        this.list = [];
    }
    add1 (event : any) {
        this.list.push({title:(<HTMLInputElement>event.target).value})
    }
    add2 (newItem : HTMLInputElement) {
        this.list.push({title:newItem.value});
    }
    ngOnInit(){}
}