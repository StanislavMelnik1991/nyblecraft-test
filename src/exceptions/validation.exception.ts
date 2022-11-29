import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  messages: Array<Record<string, Array<string>>>;

  constructor(response: Array<Record<string, Array<string>>>) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
