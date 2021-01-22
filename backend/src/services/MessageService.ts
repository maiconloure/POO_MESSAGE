interface IMessageTo {
  name: string
  code: string
}

interface IMessage {
  subject: string
  body: string
}

// DTO - Data Transfer Object (DDD)
interface IMessageDTO {
  to: IMessageTo
  message: IMessage
}

interface IMessageService {
  sendMessage(request: IMessageDTO): void
}

class MessageService implements IMessageService {
  sendMessage({ to, message }: IMessageDTO): void {
    console.log(`Mensagem enviada para o usuário ${to}, mensagem: ${message}`)
  }
}

export default MessageService
