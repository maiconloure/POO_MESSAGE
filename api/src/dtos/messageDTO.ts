import { IMessage } from '../interfaces/message'
import User from '@models/User'

export interface IMessageDTO {
  to: User
  from: User
  message: IMessage
}
