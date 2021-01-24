import { messages } from '@controllers/MessageController';
const fetch = require('node-fetch');

interface IMessageTo {
  name: string
  code: string
}

interface IMessage {
  subject: string
  body: string
}

interface IFooasMessage {
  name: string
  url: string
}

interface IMessageDTO {
  to: IMessageTo
  from: IMessageTo
  message: IMessage
}

interface IGetFooasMessage {
  url: string
  to: string
  from: string
}

interface IMessageService {
  sendMessage(request: IMessageDTO): void
  getFooasOperations():  void
  checkValidData(data: IMessageDTO): string
  getAllUserMessages(code: string): IMessageDTO[]
}


class MessageService implements IMessageService {

  sendMessage({ to, from, message }: IMessageDTO): void {
    messages.push({ to, from, message })
  }

  async getFooasOperations() {
    const messages: IFooasMessage[] = []
    const operations = await fetch('https://www.foaas.com/operations').then((res: any) => res.json())
    for (let operation of operations) {
      if (operation.url.includes(':name/:from')) {
        messages.push({ name: operation.name, url: operation.url })
      }
    }
    
    return messages
  }

  async getFooasMessage({url, to, from}: IGetFooasMessage) {
    const desired = {to: to.replace(/[^\w\s]/gi, ''), from: from.replace(/[^\w\s]/gi, '')}
    const message = await fetch(`https://www.foaas.com${url}/${desired.to}/${desired.from}`, {
      method: 'get',
      headers: { 'Accept': 'application/json' },
  })
    .then((res: any) => {
      return res.json()
    }).catch((err: any) => {
      console.error(err)
    })
    return message
  }

  checkValidData({ to, from, message }: IMessageDTO): string  {
    if (to.name === '' || from.name === '') {
      return 'Remetente ou destinatário inválidos!'

    } else if (to.name === from.name || to.code === from.code ) {
      return 'Remetente e destinatário devem ser diferentes!'
      
    } else if (message.subject.length < 1 || message.body.length < 1) {
      return 'Assunto ou mensagem não podem estar em branco!'
    }
    return 'OK'
  }

  getAllUserMessages(code: string) {
    const userMessages = messages.filter(message => {
      if (message.to.code === code || message.from.code === code) {
        return message
      }
    })
    return userMessages
  }
}

export default MessageService
