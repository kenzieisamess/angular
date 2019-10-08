import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() detail: string;
  private upVote: number;
  private downVote: number;

  constructor() {
    this.upVote = 0;
    this.downVote = 0;
  }

  ngOnInit() {
  }

  incrementVote(): void {
    this.upVote += 1;
    console.log(this.upVote);
  }

  decrementVote(): void {
    this.downVote += 1;
  }

  getUpvote() {
    return this.upVote;
  }

  getDownvote() {
    return this.downVote;
  }
}
