import express from 'express'
import cors from 'cors'
import MessageController from '@controllers/MessageController'
import UsersController from '@controllers/UsersController'

class App {
  public express:express.Application
  private messageController: MessageController
  private usersController: UsersController

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.messageController = new MessageController()
    this.usersController = new UsersController()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.get('/messages', this.messageController.index)

    this.express.post('/message', this.messageController.sendMessage)

    this.express.get('/messages/user/:code', this.messageController.getUserMessages)

    this.express.get('/operations/fooas', this.messageController.getFOOAS)

    this.express.post('/message/fooas', this.messageController.getFOOASMessage)

    this.express.get('/users', this.usersController.index)

    this.express.post('/users/create', this.usersController.create)
  }
}

export default new App().express
