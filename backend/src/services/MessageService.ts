import { Message, messages } from '@models/Message'
import { IMessageDTO } from '../dtos/messageDTO'
import { IFooasMessage, IGetFooasMessage } from '../interfaces/message'
const fetch = require('node-fetch')

interface IMessageService {
  sendMessage(request: IMessageDTO): void
  getFooasOperations(): void
  checkValidData(data: IMessageDTO): string
  getAllUserMessages(code: string): Message[]
}

class MessageService implements IMessageService {
  sendMessage ({ to, from, message }: IMessageDTO): void {
    const newMessage = new Message({ to, from, message })
    messages.push(newMessage)
  }

  async getFooasOperations () {
    const messages: IFooasMessage[] = []
    const OperationsResponse = await fetch('https://www.foaas.com/operations')
    const operationsJson = await OperationsResponse.json()

    for (const operation of operationsJson) {
      if (operation.url.includes(':name/:from')) {
        messages.push({ name: operation.name, url: operation.url })
      }
    }

    return messages
  }

  async getFooasMessage ({ url, to, from }: IGetFooasMessage) {
    const desired = { to: to.replace(/[^\w\s]/gi, ''), from: from.replace(/[^\w\s]/gi, '') }

    const getFooaMessage = await fetch(`https://www.foaas.com${url}/${desired.to}/${desired.from}`,
      {
        method: 'get',
        headers: { Accept: 'application/json' }
      })

    const message = getFooaMessage.json()

    return message
  }

  checkValidData ({ to, from, message }: IMessageDTO): string {
    if (to.name === '' || from.name === '') {
      return 'Remetente ou destinatário inválidos!'
    } else if (to.name === from.name || to.code === from.code) {
      return 'Remetente e destinatário devem ser diferentes!'
    } else if (message.subject.length < 1 || message.body.length < 1) {
      return 'Assunto ou mensagem não podem estar em branco!'
    }

    return 'OK'
  }

  getAllUserMessages (code: string) {
    const userMessages = messages.filter(msg => {
      const message = msg.getMessage()
      if (message.to.code === code || message.from.code === code) {
        return message
      }
      return false
    })
    return userMessages
  }
}

export default MessageService
