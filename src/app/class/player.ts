import {ConfigTouch} from './config-touch';

export class Player {
  private _login: string;
  private _configuration: ConfigTouch;

  constructor(login: string) {
    this._login = login;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get configuration(): ConfigTouch {
    return this._configuration;
  }

  set configuration(value: ConfigTouch) {
    this._configuration = value;
  }
}
