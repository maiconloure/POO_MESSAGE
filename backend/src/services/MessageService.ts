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

// DTO - Data Transfer Object (DDD)
interface IMessageDTO {
  to: IMessageTo
  from: IMessageTo
  message: IMessage
}


interface IMessageService {
  sendMessage(request: IMessageDTO): void
}

class MessageService implements IMessageService {

  sendMessage({ to, from, message }: IMessageDTO): void {
    messages.push({ to, from, message })
  }

  async getFooasMessages() {
    const messages: Object[] = []
    const operations = await fetch(`https://www.foaas.com/operations`).then((res: any) => res.json())
    
    for (let ops of operations) {
      if (ops.url.includes(':name/:from')) {
        messages.push({ name: ops.name, url: ops.url })
      }
    }

    return messages
  }
  
}

export default MessageService
