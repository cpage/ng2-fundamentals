import { Directive, OnInit, Input, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = elRef.nativeElement;
    }

    private el: HTMLElement;
    @Input('modal-trigger') modalTrigger: string;
    ngOnInit() {
        this.el.addEventListener('click', (e) => {
            this.$(`#${this.modalTrigger}`).modal({});
        });
    }
}