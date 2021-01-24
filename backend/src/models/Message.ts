interface IMessageTo {
  name: string
  code: string
}

interface IMessageFrom {
  name: string
  code: string
}

interface IMessage {
  subject: string
  body: string
}

interface IMessageDTO {
  to: IMessageTo
  from: IMessageFrom
  message: IMessage
}

export class Message {
  
  private to: IMessageTo
  private from: IMessageFrom
  private message: IMessage

  constructor({to, from, message}: IMessageDTO) {
    this.to = to
    this.from = from
    this.message = message
  }

  getMessage() {
    return { to: this.to, from: this.from, message: this.message }
  }
  
}

export const users = []