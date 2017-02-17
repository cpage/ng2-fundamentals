import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'collapsible-well',
    templateUrl: 'collapsible-well.component.html'
})
export class CollapsibleWellComponent implements OnInit {
    constructor() { }

    visible: boolean = true;

    ngOnInit() { }

    toggleContent() {
        this.visible = !this.visible;
    }
}