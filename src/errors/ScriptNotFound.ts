import { ErrorCode } from 'enums';
import { BaseError } from './BaseError';

export class ScriptNotFound extends BaseError {
  constructor(message: string = 'Could not find securiti script tag in dom.') {
    super(message, ErrorCode.HALT_ON_ERROR);
    this.name = 'SDKScriptNotFound';
  }
}
