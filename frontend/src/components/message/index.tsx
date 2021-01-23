import React, { useState } from 'react';
import API from '../../services/api';
import {Component, Select, MessageBox }  from './styled';
import { useToasts } from 'react-toast-notifications'

interface IUser {
  name: string
  code: string
}

interface IUsers {
  users: IUser[]
}

const MessageComponent: React.FC<IUsers> = ({users}) => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const { addToast } = useToasts()

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
      console.log(res)
      addToast('Mensagem enviada com sucesso!', { appearance: 'success', autoDismiss: true })

    })
    .catch(err => {
      console.log(err.response.data)
      addToast(err.response.data, { appearance: 'error', autoDismiss: true })

    })
  }

  return (
    <Component>
      <Select>
      <label htmlFor="remetente">Remetente:</label>

      <select name="remetente" onChange={(evt) => {setFrom(evt.target.value)}}>
      {users.length > 0 ? <option value="default">Selecione um usuário</option> : <option value="default">Nenhum usuário cadastrado!</option>}

        {users.map( user => (
        <option key={user.code} value={`${user.name}-${user.code}`}>{user.name} - {user.code}</option>
        ))}
      </select>
      </Select>

      <Select>
      <label htmlFor="destinatario">Destinatário:</label>

      <select name="destinatario" defaultValue="default" onChange={(evt) => setTo(evt.target.value)} >
      {users.length > 0 ? <option value="default">Selecione um usuário</option> : <option value="default">Nenhum usuário cadastrado!</option>}

        {users.map( user => (
        <option key={user.code} value={`${user.name}-${user.code}`}>{user.name} - {user.code}</option>
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