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
    this.express.get('/messages', (req, res) => this.messageController.index(req, res))

    this.express.post('/message', (req, res) => this.messageController.sendMessage(req, res))

    this.express.get('/messages/user/:code', (req, res) => this.messageController.getUserMessages(req, res))

    this.express.get('/operations/fooas', (req, res) => this.messageController.getFOOAS(req, res))

    this.express.post('/message/fooas', (req, res) => this.messageController.getFOOASMessage(req, res))

    this.express.get('/users', (req, res) => this.usersController.index(req, res))

    this.express.post('/users/create', (req, res) => this.usersController.create(req, res))
  }
}

export default new App().express
