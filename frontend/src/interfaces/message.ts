export interface IMessageTo {
  name: string
  code: string
}

export interface IMessageFrom {
  name: string
  code: string
}

export interface IMessage {
  subject: string
  body: string
}

export interface IMessageDTO {
  to: IMessageTo
  from: IMessageFrom
  message: IMessage
}

export interface IFooasMessage {
  name: string
  url: string
}
