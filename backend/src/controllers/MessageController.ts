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
  index(req: Request, res: Response) {
    return res.json(messages);
  },

  getUserMessages(req: Request, res: Response) {
    const messageService = new MessageService()
    const userMessages = messageService.getAllUserMessages(req.params.code)
    return res.json(userMessages);
  },

  sendMessage(req: Request, res: Response) {
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
      const fooasMessages = await messageService.getFooasOperations()
      return res.status(200).send(fooasMessages)
  },

  async getFOOASMessage(req: Request, res: Response) {
    const messageService = new MessageService()
    const data = req.body
    const fooasMessages = await messageService.getFooasMessage(data)
    return res.status(200).send(fooasMessages)

  }

}
