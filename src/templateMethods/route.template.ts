import { Router, Request, Response } from 'express';

export type methodType = 'get' | 'post' | 'put' | 'delete' | 'patch';

interface RouteConfig {
  path: string;
  method: methodType;
  controller: any;
}

export default class RouteTemplate {
  private router = Router();
  private routes: RouteConfig[];

  constructor(routes: RouteConfig[]) {
    this.routes = routes;
  }

  createRoutes() {
    this.routes.forEach(({ path, method, controller }) => {
      this.router[method](path, (req: Request, res: Response) => {
        const ctrl = new controller();
        ctrl.execute(req, res);
      });
    });
  }

  getRouter() {
    return this.router;
  }
}
