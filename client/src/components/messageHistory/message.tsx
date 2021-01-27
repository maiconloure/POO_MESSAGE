import React, { FunctionComponent } from 'react'
import { IMessageDTO } from '../../interfaces/message'
import { MessageComponent } from './styled'

type MessageProps = {
  getMessage: IMessageDTO
}

const Message: FunctionComponent<MessageProps> = ({ getMessage }) => {
  return (
  <MessageComponent>
    <p>{getMessage.message.subject} - Enviada</p>
    <p>Enviada por <b>{getMessage.from.name}</b> | Recebida por: <b>{getMessage.to.name}</b></p>
    <i>{getMessage.message.body}</i>
    <p>{'-'.repeat(100)}</p>
  </MessageComponent>
  )
}

export default Message
