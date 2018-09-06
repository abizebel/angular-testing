import {Input, Directive, TemplateRef, ViewContainerRef} from '@angular/core';



@Directive({
    selector : '[isopen]'
}) 



export class IsOpenDirective {

    @Input() set isopen(condition : boolean){
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.vcRef.clear();
        }
    }
    constructor (private templateRef : TemplateRef <any>,
                 private vcRef  :ViewContainerRef )
    {

    }
}