import { ErrorCode } from 'enums';

export interface IError {}

export class BaseError extends Error {
  private _code: ErrorCode;

  constructor(message: string, code: ErrorCode) {
    super(message);
    this.name = 'SDKError';
    this._code = code;
  }

  get code(): ErrorCode {
    return this._code;
  }
}
