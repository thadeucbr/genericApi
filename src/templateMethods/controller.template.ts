import { Request, Response } from 'express';
import { ResponseType } from '../types/templateMethods/controller.template.types';

export default class ControllerTemplate {
  req: Request;
  res: Response;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }

  okResponse(data: any) {
    this.customResponse({ status: 200, data: { status: 'Success', data } });
  }

  createdResponse(data: any) {
    this.customResponse({ status: 201, data: { status: 'Created', data } });
  }

  noContentResponse() {
    this.customResponse({ status: 204, data: { status: 'No Content' } });
  }

  badRequestResponse(data: any) {
    this.customResponse({ status: 400, data: { status: 'Bad Request', data } });
  }

  unauthorizedResponse() {
    this.customResponse({ status: 401, data: { status: 'Unauthorized' } });
  }

  forbiddenResponse() {
    this.customResponse({ status: 403, data: { status: 'Forbidden' } });
  }

  notFoundResponse() {
    this.customResponse({ status: 404, data: { status: 'Not Found' } });
  }

  internalServerErrorResponse() {
    this.customResponse({
      status: 500,
      data: { status: 'Internal Server Error' },
    });
  }

  customResponse({ status, data }: ResponseType) {
    console.log(status)
    this.res.status(status).send(data);
  }
}
