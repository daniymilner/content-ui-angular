import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.styl'],
})
export class ContentCardComponent implements OnInit {
  @Input() content;

  constructor() {
  }

  ngOnInit() {
  }

}
