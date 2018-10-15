import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() answer: string;
  @Input() height: number;

  constructor() { }

  ngOnInit() {
  }

}
