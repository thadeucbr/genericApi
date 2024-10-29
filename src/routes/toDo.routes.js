import RouteTemplate from '../templateMethods/route.template'
import CreateToDoController from '../controllers/toDo/createToDo.controller'
import DeleteToDoController from '../controllers/toDo/deleteToDo.controller'
import GetToDoController from '../controllers/toDo/getToDo.controller'
import UpdateToDoController from '../controllers/toDo/updateToDo.controller'
import ListToDosController from '../controllers/toDo/listToDos.controller'

const createToDoRoute = new RouteTemplate('todo', 'post', CreateToDoController)

const deleteToDoRoute = new RouteTemplate('todo/:id', 'delete', DeleteToDoController)

const getToDoRoute = new RouteTemplate('todo/:id', 'get', GetToDoController)

const updateToDoRoute = new RouteTemplate('todo/:id', 'put', UpdateToDoController)

const listToDosRoute = new RouteTemplate('todo', 'get', ListToDosController)

export default [
  createToDoRoute.createRoute,
  deleteToDoRoute.createRoute,
  getToDoRoute.createRoute,
  updateToDoRoute.createRoute,
  listToDosRoute.createRoute
]