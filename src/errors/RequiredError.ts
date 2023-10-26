export class RequiredError extends Error {
  private _code: number;

  constructor(message: string, code: number) {
    super(message);
    this._code = code;
    this.name = 'SDKRequiredError';
  }

  get code(): number {
    return this._code;
  }
}
