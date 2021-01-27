import { Request, Response, Application } from 'express'
import MessageController from '@controllers/Message/MessageController'
import UsersController from '@controllers/User/UsersController'

export default class Routes {
  public routes (app: Application): void {
    app.route('/messages').get((req: Request, res: Response) => MessageController.index)

    app.route('/messages').post((req: Request, res: Response) => MessageController.sendMessage)

    app.route('/messages/user/:code').post((req: Request, res: Response) => MessageController.getUserMessages)

    app.route('/operations/fooas').post((req: Request, res: Response) => MessageController.getFOOAS)

    app.route('/message/fooas').post((req: Request, res: Response) => MessageController.getFOOASMessage)

    app.route('/users').post((req: Request, res: Response) => UsersController.index)

    app.route('/users/create').post((req: Request, res: Response) => UsersController.create)
  }
}
