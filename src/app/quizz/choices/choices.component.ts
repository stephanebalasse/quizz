import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  @Input() answers: string[];

  @Input() height: number;

  constructor() {

  }

  ngOnInit() {
  }

}
