import Message from './Message'
import { IUser } from '../interfaces/user'

interface IUserModel {
  // get user(): IUser
  // set user(): void
  getMessages(): Message[]
}

export default class User implements IUserModel {
  public name: string
  public code: string
  private messages: Message[]

  constructor ({ name, code }: IUser) {
    this.name = name
    this.code = code
    this.messages = []
  }

  get user (): IUser {
    return { name: this.name, code: this.code }
  }

  set user ({ name, code }: IUser) {
    this.name = name
    this.code = code
  }

  public addMessage (message: Message) {
    this.messages.push(message)
  }

  public getMessages () {
    return this.messages
  }
}

export const users: User[] = []
