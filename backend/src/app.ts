import express from 'express'
import cors from 'cors'
import MessageController from '@controllers/MessageController'
import UsersController from '@controllers/UsersController'

const users = []
const messages = [];


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
    this.express.get('/', (req, res) => {
      return res.send('Welcome to POO_MESSAGE API ⚡️⚡️⚡️')
    })
    this.express.get('/messages', (req, res) => {
      MessageController.index(req, res)
    })

    this.express.get('/users', (req, res) => {
      UsersController.index(req, res)
    })
  }
}

export default new App().express
