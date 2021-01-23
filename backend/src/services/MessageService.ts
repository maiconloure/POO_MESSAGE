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

// DTO - Data Transfer Object(DDD)
interface IMessageDTO {
  to: IMessageTo
  from: IMessageTo
  message: IMessage
}

interface IMessageService {
  sendMessage(request: IMessageDTO): void
  getFooasOperations():  void
  checkValidData(data: IMessageDTO): string
}


class MessageService implements IMessageService {

  sendMessage({ to, from, message }: IMessageDTO): void {
    messages.push({ to, from, message })
  }

  async getFooasOperations() {
    const messages: IFooasMessage[] = []
    const operations = await fetch(`https://www.foaas.com/operations`).then((res: any) => res.json())
    
    for (let ops of operations) {
      if (ops.url.includes(':name/:from')) {
        messages.push({ name: ops.name, url: ops.url })
      }
    }
    return messages
  }

  checkValidData({ to, from, message }: IMessageDTO): string  {
    if (to.name === '' || from.name === '') {
      return 'Remetente ou destinatário inválidos!'

    } else if (to.name === from.name || to.code === from.code ) {
      return 'Remetente e destinatário devem ser diferentes!'
      
    } else if (message.subject.length < 1 || message.body.length < 1) {
      return 'Assunto ou mensagem não pode estar em branco!'
    }
    return 'OK'
  }
}

export default MessageService
