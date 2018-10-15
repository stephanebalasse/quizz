import {Answer} from '../interface/answer';

export class Qcm {
  private _question: string;
  private _answers: string[];
  private _soluce?: string;
  private _resource?: string;

  constructor() {
    this._answers = [];
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }

  get answers(): string[] {
    return this._answers;
  }

  set answers(value: string[]) {
    this._answers = value;
  }

  get soluce(): string {
    return this._soluce;
  }

  set soluce(value: string) {
    this._soluce = value;
  }


  get resource(): string {
    return this._resource;
  }

  set resource(value: string) {
    this._resource = value;
  }
}
