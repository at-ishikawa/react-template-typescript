export default class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = (<any>this).constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
