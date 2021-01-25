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

export interface IFooasMessage {
  name: string
  url: string
}

export interface IGetFooasMessage {
  url: string
  to: string
  from: string
}
