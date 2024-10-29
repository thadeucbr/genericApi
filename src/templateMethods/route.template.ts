import { Router, Request, Response } from 'express';

type methodType = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default class RouteTemplate {
  private router = Router();
  private methods = {
    get: this.router.get.bind(this.router),
    post: this.router.post.bind(this.router),
    put: this.router.put.bind(this.router),
    delete: this.router.delete.bind(this.router),
    patch: this.router.patch.bind(this.router),
  };
  private path: string;
  private method: methodType;
  private controller: any;

  constructor(path: string, method: methodType, controller: any) {
    this.path = path;
    this.method = method;
    this.controller = controller;
  }

  createRoute() {
    return this.methods[this.method](
      this.path,
      (req: Request, res: Response) => {
        const controller = new this.controller();
        controller.execute(req, res);
      },
    );
  }
}
