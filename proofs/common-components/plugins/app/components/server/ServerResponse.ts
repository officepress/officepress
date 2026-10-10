//modules
import type {
  Trace,
  UnknownNest,
  NestedObject,
  CallableNest,
  StatusResponse
} from '@stackpress/lib/types';
import { nest, isObject } from '@stackpress/lib/Nest';
import Exception from '@stackpress/lib/Exception';
import Status from '@stackpress/lib/Status';

//client
import type { ServerResponseProps } from './types.js';

//--------------------------------------------------------------------//
// Types

//stackpress-view

export type { ServerResponseProps };

//--------------------------------------------------------------------//
// Classes

/**
 * Client version of response. Readonly.
 */
export default class Response<O = UnknownNest> {
  //error controller
  public readonly errors: CallableNest<NestedObject<string | string[]>>;
  //response status code
  protected _code = 0;
  //body error message
  protected _error?: string;
  //results controller
  protected _results?: O;
  //stack trace
  protected _stack?: Trace[];
  //response status message
  protected _status = '';
  //total count of possible results
  protected _total = 0;

  //returns the status code
  public get code() {
    return this._code;
  }

  //returns the error message
  public get error(): string | undefined {
    return this._error;
  }

  //returns results
  public get results(): O | undefined {
    if (isObject(this._results)) {
      return Object.freeze(this._results) as O;
    } else if (Array.isArray(this._results)) {
      return Array.from(this._results) as O;
    }
    return this._results as O | undefined;
  }

  //returns a stack trace if error
  public get stack(): Trace[] | undefined {
    return this._stack;
  }

  //returns the status message
  public get status(): string {
    return this._status;
  }

  //returns the total count of possible results
  public get total() {
    return this._total;
  }

  //sets the initial values of the payload
  public constructor(response: ServerResponseProps<O>) {
    const { code, status, error, errors, stack, results, total } = response;
    if (code) {
      this._code = code;
    }
    if (status) {
      this._status = status;
    } else if (this._code) {
      this._status = Status.get(this._code)?.status || 'Unknown Status';
    }
    if (error) {
      this._error = error;
    }
    this.errors = nest();
    if (errors) {
      this.errors.set(errors);
    }
    if (stack) {
      this._stack = stack;
    }
    if (results) {
      this._results = results;
    }
    if (total) {
      this._total = total;
    }
  }

  //converts the response to an exception
  public toException(message?: string) {
    const error = message || this._error || 'Unknown Error';
    const exception = Exception.for(error)
      .withCode(this._code)
      .withErrors(this.errors());
    if (this._stack) {
      let stack = `Response: ${error}\n`;
      stack += this._stack
        .map(
          (trace) =>
            `  at ${trace.method} (` +
            `${trace.file}:${trace.line}:${trace.char}` +
            `)`
        )
        .join('\n');
      exception.stack = stack;
    }

    return exception;
  }

  //converts the response to a status response
  public toStatusResponse(): Partial<StatusResponse<O>> {
    return {
      code: this._code,
      status: this._status,
      error: this._error,
      errors: this.errors(),
      stack: this._stack,
      results: this.results as O | undefined,
      total: this._total
    };
  }
};
