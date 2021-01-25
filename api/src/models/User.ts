import Message from './Message'
import { IUser } from '../interfaces/user'

interface IUserModel {
  getUser(): IUser
  setUser(): void
}

export class User implements IUserModel {
  public name: string
  public code: string
  private messages: Message[]

  constructor ({ name, code }: IUser) {
    this.name = name
    this.code = code
    this.messages = []
  }

  getUser () {
    return { name: this.name, code: this.code }
  }

  setUser (name?: string, code?: string) {
    this.name = name || this.name
    this.code = code || this.code
  }

  addMessage (message: Message) {
    this.messages.push(message)
  }
}

export const users: User[] = []
