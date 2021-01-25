import { IMessageTo, IMessageFrom, IMessage } from '../interfaces/message'

export interface IMessageDTO {
  to: IMessageTo
  from: IMessageFrom
  message: IMessage
}
