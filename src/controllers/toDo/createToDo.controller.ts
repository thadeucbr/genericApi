import ControllerTemplate from '../../templateMethods/controller.template';

export default class CreateToDoController extends ControllerTemplate {
  execute(): void {
    this.okResponse('CreateToDoController');
  }
}
