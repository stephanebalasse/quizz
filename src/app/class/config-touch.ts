export class ConfigTouch {
  private _buttonBuzz: string;
  private _buttonA: string;
  private _buttonB: string;
  private _buttonC: string;
  private _buttonD: string;

  constructor() {
    this._buttonBuzz = '';
    this._buttonA = '';
    this._buttonB = '';
    this._buttonC = '';
    this._buttonD = '';
  }

  get buttonBuzz(): string {
    return this._buttonBuzz;
  }

  set buttonBuzz(value: string) {
    this._buttonBuzz = value;
  }

  get buttonA(): string {
    return this._buttonA;
  }

  set buttonA(value: string) {
    this._buttonA = value;
  }

  get buttonB(): string {
    return this._buttonB;
  }

  set buttonB(value: string) {
    this._buttonB = value;
  }

  get buttonC(): string {
    return this._buttonC;
  }

  set buttonC(value: string) {
    this._buttonC = value;
  }

  get buttonD(): string {
    return this._buttonD;
  }

  set buttonD(value: string) {
    this._buttonD = value;
  }
}
