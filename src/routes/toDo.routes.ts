import RouteTemplate, { methodType } from '../templateMethods/route.template';
import CreateToDoController from '../controllers/toDo/createToDo.controller';
import DeleteToDoController from '../controllers/toDo/deleteToDo.controller';
import FindToDoController from '../controllers/toDo/findToDo.controller';
import UpdateToDoController from '../controllers/toDo/updateToDo.controller';
import ListToDosController from '../controllers/toDo/listToDos.controller';

const routes: { path: string; method: methodType; controller: any }[] = [
  { path: 'todo', method: 'post', controller: CreateToDoController },
  { path: 'todo/:id', method: 'delete', controller: DeleteToDoController },
  { path: 'todo/:id', method: 'get', controller: FindToDoController },
  { path: 'todo/:id', method: 'put', controller: UpdateToDoController },
  { path: 'todo', method: 'get', controller: ListToDosController },
];

const routeTemplate = new RouteTemplate(routes);
routeTemplate.createRoutes();

export default routeTemplate.getRouter();
