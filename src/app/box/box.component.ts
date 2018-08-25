import {
    Component, 
    Input,
    EventEmitter,
    SimpleChanges,
    Output,
    //Lifecycles
    OnInit, 
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,

    } from '@angular/core';

@Component({
    styleUrls : ['./box.component.css'],
    templateUrl : './box.component.html',
    selector :'app-box' 
})


export class BoxComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked ,
AfterViewInit,
AfterViewChecked,
OnDestroy

{
    //The @Input() decorator defines a set of parameters that can be passed
    @Input() listItem: string;
    constructor(){
        console.log('constructor called')
    }


    ngOnInit(){
        console.log('ngOnInit called')
    }
    ngOnChanges (changes: SimpleChanges){
        console.log('ngOnChanges called')
        console.log(changes)
    }
    ngDoCheck () {
        console.log('ngDoCheck called')
    }
    ngAfterContentInit () {
        console.log('ngAfterContentInit called')
    }
    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called')
    }
    ngAfterViewInit () {
        console.log('ngAfterViewInit called')
    }
    ngAfterViewChecked (){
        console.log('ngAfterViewChecked called')
    }
    ngOnDestroy () {
        console.log('ngOnDestroy called')
    }
}
