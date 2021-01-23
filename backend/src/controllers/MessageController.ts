import { Request, Response } from 'express'
import MessageService from '@services/MessageService'
const fetch = require('node-fetch');

export const messages = [
  {
    to: {
      name: 'Maicon',
      code: '44EE22AA'
    },
    from: {
      name: 'Maicon',
      code: '44EE22AA'
    },
    message: {
      subject: 'Teste',
      body: 'Olá amigo isso é um teste'
    }
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(messages);
  },

  async send(req: Request, res: Response) {
    const messageService = new MessageService()
    const data = req.body
    console.log(messages)
    try {
      messageService.sendMessage(data)
      return res.sendStatus(200)
    } 
    catch (err) {
      console.error(err)
      return res.sendStatus(400)
    }
  },

  async getFOOAS(req: Request, res: Response) {
      const messageService = new MessageService()
      messageService.getFooasMessages()
      const fooaMessages = []
      return res.sendStatus(200)
  },

  async sendFOOAS(req: Request, res: Response) {
    const messageService = new MessageService()
    const data = req.body

    messageService.sendMessage(data)
  }
}
