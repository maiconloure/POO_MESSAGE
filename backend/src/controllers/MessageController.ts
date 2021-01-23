import { Request, Response } from 'express'
import MessageService from '@services/MessageService'

export const messages = [
  {
    to: {
      name: 'Maicon',
      code: '44EE22AA'
    },
    from: {
      name: 'Jack',
      code: 'ZZAA22BB'
    },
    message: {
      subject: 'Teste',
      body: 'Olá amigo isso é um teste...'
    }
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(messages);
  },

  async sendMessage(req: Request, res: Response) {
    const messageService = new MessageService()
    const data = req.body
    const analyzedData = messageService.checkValidData(data)

    if (analyzedData === 'OK') {
      messageService.sendMessage(data)
      return res.sendStatus(200)
    } else {
      return res.status(400).send(analyzedData);
    }
  },

  async getFOOAS(req: Request, res: Response) {
      const messageService = new MessageService()
      messageService.getFooasOperations()
      const fooaMessages = []
      return res.sendStatus(200)
  },

  async sendFOOAS(req: Request, res: Response) {
    const messageService = new MessageService()
    const data = req.body

    messageService.sendMessage(data)
  }

}
