import { Request, Response } from 'express'
import MessageService from '@services/MessageService'


const messages = [
  {
    to: {
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

    messageService.sendMessage({
      to: {
        name: 'Maicon',
        code: '44EE22AA'
      },
      message: {
        subject: 'Teste',
        body: 'Olá amigo isso é um teste'
      }
    })
    console.log(req)
    return res.send(200)
  }
}
