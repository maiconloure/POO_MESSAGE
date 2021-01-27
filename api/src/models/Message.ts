import { IMessage } from '../interfaces/message'
import { IMessageDTO } from '../dtos/messageDTO'

import User from '@models/User'

interface IMessageModel {
  Message: IMessageDTO
}

export default class Message implements IMessageModel {
  private to: User
  private from: User
  private message: IMessage

  constructor ({ to, from, message }: IMessageDTO) {
    this.to = to
    this.from = from
    this.message = message
  }

  get Message (): IMessageDTO {
    return { to: this.to, from: this.from, message: this.message }
  }

  set Message ({ to, from, message }: IMessageDTO) {
    this.to = to
    this.from = from
    this.message = message
  }
}

export const messages: Message[] = []
