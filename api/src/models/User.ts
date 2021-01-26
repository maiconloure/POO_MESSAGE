import Message from './Message'
import { IUser } from '../interfaces/user'

interface IUserModel {
  getUser(): IUser
  setUser(): void
  getMessages(): Message[]
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

  public getUser () {
    return { name: this.name, code: this.code }
  }

  public setUser (name?: string, code?: string) {
    this.name = name || this.name
    this.code = code || this.code
  }

  public addMessage (message: Message) {
    this.messages.push(message)
  }

  public getMessages () {
    return this.messages
  }
}

export const users: User[] = []
