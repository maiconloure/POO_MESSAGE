import React, { useState } from 'react';
import API from '../../services/api';
import {Component, Select, MessageBox }  from './styled';

interface IUser {
  name: string
  code: string
}

interface IMessage {
  users: IUser[]
}

const MessageComponent: React.FC<IMessage> = ({users}) => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    const data = {
      to: {
        name: to.split('-')[0],
        code: to.split('-')[1]
      },
      from: {
        name: from.split('-')[0],
        code: from.split('-')[1]
      },
      message: {
        subject: subject,
        body: message
      }
    }
    console.log(data)
    API.post('/message', data)
    .then(res => {
      console.info(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <Component>
      <Select>
      <label htmlFor="remetente">Remetente:</label>

      <select name="remetente" defaultValue="default" onChange={(evt) => {
        setFrom(evt.target.value)
      }} >
      <option value="default">Selecione um usuário</option>

        {users.map( user => (
        <option value={`${user.name}-${user.code}`}>{user.name} - {user.code}</option>
        ))}
      </select>
      </Select>

      <Select>
      <label htmlFor="destinatario">Destinatário:</label>

      <select name="destinatario" defaultValue="default" onChange={(evt) => setTo(evt.target.value)} >
      <option value="default">Selecione um usuário</option>

        {users.map( user => (
        <option value={`${user.name}-${user.code}`}>{user.name} - {user.code}</option>
        ))}
      </select>
      </Select>
      <MessageBox>
      <label htmlFor="subject">Assunto:</label>
      <input name="subject" type="text" value={subject} onChange={(evt) => setSubject(evt.target.value)}/>

      <label htmlFor="message">Mensagem:</label>
      <textarea name="message" value={message} onChange={(evt) => setMessage(evt.target.value)}/>
      </MessageBox>
      <button onClick={() => sendMessage()}>Enviar</button>
    </Component>
  )
}

export default MessageComponent