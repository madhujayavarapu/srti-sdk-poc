import { State } from './state';
import { ILogger, IState } from 'types';

export class Context {
  state: State;
  logger: ILogger;

  constructor(state: IState, logger: ILogger) {
    this.state = state || new State();
    this.logger = Object.freeze(logger);
  }
}
