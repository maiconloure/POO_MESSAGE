import Message from '@models/Message'
import User from '@models/User'

export default class InMemory {
  private _users: User[]
  private _messages: Message[]

  constructor () {
    this._users = []
    this._messages = []
  }

  public static get users (): User[] {
    return this.users
  }

  public static set users (user: User[]) {
    this.users.push(user[0])
  }

  public static get messages (): Message[] {
    return this.messages
  }

  public static set messages (message: Message[]) {
    this.messages.push(message[0])
  }
}
