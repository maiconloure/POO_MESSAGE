import React, { useState } from 'react';
import {Component, Select, MessagesBox, SectionBox, Messages, Message }  from './styled';
import API from '../../services/api';

interface IUser {
  name: string
  code: string
}

interface IUsers {
  users: IUser[]
}

interface IMessageTo {
  name: string
  code: string
}

interface IMessage {
  subject: string
  body: string
}

interface IMessageDTO {
  to: IMessageTo
  from: IMessageTo
  message: IMessage
}

const MessageHistoryComponent: React.FC<IUsers> = ({users}) => {
  const [currentUser, setCurrentUser] = useState<string[]>([])
  const [messages, setMessages] =  useState<IMessageDTO[]>([])

  const getUserMessages = (user: string) => {
    const data = user.split('-')
    setCurrentUser(data)
    API.get(`/messages/user/${data[1]}`)
    .then(response => {
      setMessages(response.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <Component>
      <Select>
      <label htmlFor="remetente">Usuário:</label>

      <select name="remetente" onChange={(evt) => {getUserMessages(evt.target.value)}}>
      {users.length > 0 ? <option value="default">Selecione um usuário</option> : <option value="default">Nenhum usuário cadastrado!</option>}

        {users.map( user => (
        <option key={user.code} value={`${user.name}-${user.code}`}>{user.name} - {user.code}</option>
        ))}
      </select>

      </Select>
      <MessagesBox>
          <SectionBox>Mensagens</SectionBox>
          <Messages>
          {messages.map((getMessage, index) => {
            if (getMessage.from.code === currentUser[1]) {
              return <Message key={index}>
                <p>{getMessage.message.subject} - Enviada</p>
                <p>Enviada por <b>{getMessage.from.name}</b> | Recebida por: <b>{getMessage.to.name}</b></p>
                <i>{getMessage.message.body}</i>
                <p>{'-'.repeat(100)}</p>
                </Message>
            } else if (getMessage.to.code === currentUser[1]) {
              return <Message key={index}>
                <p>{getMessage.message.subject} - Recebida</p>
                <p>Enviada por <b>{getMessage.from.name}</b> | Recebida por: <b>{getMessage.to.name}</b></p>
                <i>{getMessage.message.body}</i>
                <p>{'-'.repeat(100)}</p>
                </Message>
            }
          })}
          </Messages>
      </MessagesBox>
    </Component>
  )
}

export default MessageHistoryComponent