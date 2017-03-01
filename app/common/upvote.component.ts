import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'upvote',
    templateUrl: 'upvote.component.html',
    styleUrls: ['upvote.component.css']
})
export class UpvoteComponent implements OnInit {
    constructor() { }

    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'red' : 'white';
    }

    @Input() votes: number;
    @Output() vote = new EventEmitter();

    iconColor: string;

    ngOnInit() { }

    voteClick() {
        this.vote.emit({});
    }
}