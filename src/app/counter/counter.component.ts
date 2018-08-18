import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';



@Component({
    styleUrls : ['./counter.component.css'],
    templateUrl : './counter.component.html',
    selector : 'app-counter'
})




export class CounterComponent implements OnInit {
    //The @Input() decorator defines a set of parameters that can be passed
    @Input()count: number = 0;

    //The @Input() decorator defines a custom event that listenable in outside
    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    
    increment() {
      this.count++;
      this.change.emit(this.count);
    }
    
    decrement() {
      this.count--;
      this.change.emit(this.count);
    }

    constructor (){}

    ngOnInit(){}
}