import {Component, OnInit} from '@angular/core';
import {Qcm} from '../../class/qcm';
import {Player} from '../../class/player';
import {ConfigTouch} from '../../class/config-touch';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  private _qcms: Qcm[];
  private _questionNumber: number;
  private _buttonText: string;
  private _players: Player[];

  constructor() {
    this._qcms = [];
    this._players = [];
    this._questionNumber = 0;
    this._buttonText = 'Question suivante >';

    const qcm = new Qcm();
    qcm.question = 'Quel est cette forme ?';
    qcm.soluce = 'B';
    qcm.answers.push('Carré');
    qcm.answers.push('Rond');
    qcm.answers.push('Triangle');
    qcm.answers.push('Rectangle');
    qcm.resource = 'assets/rond.png';
    this._qcms.push(qcm);

    const qcm1 = new Qcm();
    qcm1.question = 'Quel est ce film  ?';
    qcm1.soluce = 'A';
    qcm1.answers.push('Le Cinquième élément');
    qcm1.answers.push('Matrix');
    qcm1.answers.push('Avatar');
    qcm1.answers.push('John Wick');
    qcm1.resource = 'assets/element.jpg';
    this._qcms.push(qcm1);

    const qcm2 = new Qcm();
    qcm2.question = 'Quel est ce film  ?';
    qcm2.soluce = 'A';
    qcm2.answers.push('Le Cinquième élément');
    qcm2.answers.push('Matrix');
    qcm2.resource = 'assets/element.jpg';
    this._qcms.push(qcm2);

    const player1 = new Player('Steph');
    const configTouch1 = new ConfigTouch();
    configTouch1.buttonBuzz = 'KeyA';
    configTouch1.buttonA = 'KeyE';
    configTouch1.buttonB = 'KeyD';
    configTouch1.buttonC = 'KeyC';
    configTouch1.buttonD = 'KeyB';
    player1.configuration = configTouch1;

    this._players.push(player1);

    const player2 = new Player('Gwen');
    const configTouch2 = new ConfigTouch();
    configTouch2.buttonBuzz = 'KeyA';
    configTouch2.buttonA = 'KeyE';
    configTouch2.buttonB = 'KeyD';
    configTouch2.buttonC = 'KeyC';
    configTouch2.buttonD = 'KeyB';
    player2.configuration = configTouch2;

    this._players.push(player2);
  }

  ngOnInit() {
  }

  get qcms(): Qcm[] {
    return this._qcms;
  }

  get questionNumber(): number {
    return this._questionNumber;
  }

  get buttonText(): string {
    return this._buttonText;
  }


  get players(): Player[] {
    return this._players;
  }

  next() {
    if (this._questionNumber < this._qcms.length - 1) {
      this._questionNumber++;
    }

    if (this._questionNumber === this._qcms.length - 1) {
      this._buttonText = 'SCORES';
    }
  }

}
