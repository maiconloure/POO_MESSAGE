import Message from '@models/Message'
import { users } from '@models/User'
import { IMessageDTO } from '../dtos/messageDTO'
import { IFooasMessage, IGetFooasMessage } from '@interfaces/fooas'
import Memory from '../infra/data/memory'
const fetch = require('node-fetch')

interface IMessageService {
  sendMessage(request: IMessageDTO): void
  getFooasOperations(): void
  checkValidData(data: IMessageDTO): string
  getAllUserMessages(code: string): Message[]
}

class MessageService implements IMessageService {
  public sendMessage ({ to, from, message }: IMessageDTO): void {
    const newMessage = new Message({ to, from, message })
    for (const user of users) {
      if (user.name === to.name) {
        user.addMessage(newMessage)
      }
    }
    Memory.messages = [newMessage]
  }

  public async getFooasOperations () {
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

  public async getFooasMessage ({ url, to, from }: IGetFooasMessage) {
    const desired = { to: to.replace(/[^\w\s]/gi, ''), from: from.replace(/[^\w\s]/gi, '') }

    const getFooaMessage = await fetch(`https://www.foaas.com${url}/${desired.to}/${desired.from}`,
      {
        method: 'get',
        headers: { Accept: 'application/json' }
      })

    const message = getFooaMessage.json()

    return message
  }

  public checkValidData ({ to, from, message }: IMessageDTO): string {
    if (to.name === '' || from.name === '') {
      return 'Remetente ou destinatário inválidos!'
    } else if (to.name === from.name || to.code === from.code) {
      return 'Remetente e destinatário devem ser diferentes!'
    } else if (message.subject.length < 1 || message.body.length < 1) {
      return 'Assunto ou mensagem não podem estar em branco!'
    }

    return 'OK'
  }

  public getAllUserMessages (code: string) {
    const user = users.filter(user => user.code === code)[0]
    const userMessages = user.getMessages()

    return userMessages
  }
}

export default MessageService
