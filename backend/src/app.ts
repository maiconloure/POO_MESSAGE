import express from 'express'
import cors from 'cors'
import MessageController from '@controllers/MessageController'
import UsersController from '@controllers/UsersController'


class App {
  public express:express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.get('/messages', MessageController.index)

    this.express.get('/messages/:code', MessageController.getUserMessages)

    this.express.post('/message', MessageController.sendMessage)
    
    this.express.get('/messages/fooas', MessageController.getFOOAS)

    this.express.get('/users', UsersController.index)

    this.express.post('/users/create', UsersController.create)
  }
}

export default new App().express
