import { IMessageTo, IMessageFrom, IMessage } from '../interfaces/message'
import { IMessageDTO } from '../dtos/messageDTO'

interface IMessageModel {
  getMessage(): IMessageDTO
  setMessage({ to, from, message }: IMessageDTO): void
}

export default class Message implements IMessageModel {
  private to: IMessageTo
  private from: IMessageFrom
  private message: IMessage

  constructor ({ to, from, message }: IMessageDTO) {
    this.to = to
    this.from = from
    this.message = message
  }

  public getMessage () {
    return { to: this.to, from: this.from, message: this.message }
  }

  public setMessage ({ to, from, message }: IMessageDTO) {
    this.to = to
    this.from = from
    this.message = message
  }
}

export const messages: Message[] = []
