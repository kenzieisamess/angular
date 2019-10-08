import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  information: string;
  @Input() prompt: string;
  items: Array<string>;

  constructor() {
    this.items = [];
  }

  ngOnInit() {
  }

  complete() {
    this.items.push(this.information);
    this.information = "";
    console.log('Add Component');
  }
}
