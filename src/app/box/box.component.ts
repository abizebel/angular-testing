import {Component, OnInit, Input,EventEmitter, Output} from '@angular/core';

@Component({
    styleUrls : ['./box.component.css'],
    templateUrl : './box.component.html',
    selector :'app-box' 
})


export class BoxComponent implements OnInit {
    //The @Input() decorator defines a set of parameters that can be passed
    @Input() listItem: string;
    constructor(){}


    ngOnInit(){}
}