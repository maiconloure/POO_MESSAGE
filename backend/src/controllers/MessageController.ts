import { Request, Response } from 'express'
import MessageService from '@services/MessageService'
import { messages } from '@models/Message'

export default class MessageController {
  private messageService: MessageService

  constructor () {
    this.messageService = new MessageService()
  }

  index (req: Request, res: Response) {
    return res.json(messages)
  }

  getUserMessages (req: Request, res: Response) {
    const userMessages = this.messageService.getAllUserMessages(req.params.code)
    return res.json(userMessages)
  }

  sendMessage (req: Request, res: Response) {
    const data = req.body
    const analyzedData = this.messageService.checkValidData(data)

    if (analyzedData === 'OK') {
      this.messageService.sendMessage(data)
      return res.sendStatus(200)
    } else {
      return res.status(400).send(analyzedData)
    }
  }

  async getFOOAS (req: Request, res: Response) {
    const fooasMessages = await this.messageService.getFooasOperations()
    return res.status(200).send(fooasMessages)
  }

  async getFOOASMessage (req: Request, res: Response) {
    const data = req.body
    const fooasMessages = await this.messageService.getFooasMessage(data)
    return res.status(200).send(fooasMessages)
  }
}
