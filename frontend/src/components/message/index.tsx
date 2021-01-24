import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import {Component, Select, MessageBox }  from './styled';
import { useToasts } from 'react-toast-notifications'
import Modal from './modal';

interface IUser {
  name: string
  code: string
}

interface IUsers {
  users: IUser[]
}
interface IFooasMessage {
  name: string
  url: string
}

const MessageComponent: React.FC<IUsers> = ({users}) => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [showModal, setShowModal] = useState(true)
  const [fooas, setFooas] = useState(false)
  const [fooasOps, setFooasOps] = useState<IFooasMessage[]>([])
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

    API.post('/message', data)
    .then(() => {
      addToast('Mensagem enviada com sucesso!', { appearance: 'success', autoDismiss: true })
    })
    .catch(err => {
      addToast(err.response.data, { appearance: 'error', autoDismiss: true })
    })
  }

  useEffect(() => {
    if (fooas) {
      API.get('/operations/fooas')
      .then(response => {
        setFooasOps(response.data)
      }).catch(err => {
        console.error(err)
      })
    }

  }, [fooas])

  const setFooaMessage = (url: string) => {
    const sanitizeUrl = url.replace('/:name', '').replace('/:from', '')
    const data = {url: sanitizeUrl, to: to.split('-')[0], from: from.split('-')[0]}

    API.post(`/message/fooas`, data).then(response => {
      setMessage(response.data.message)
      console.log(response.data)
    }).catch(err => {
      console.error(err)
    })
      
  }

  return (
    <Component>
      <Select>
        {showModal && <Modal setShowModal={setShowModal} setFooas={setFooas} />}

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

          {fooas ? <Select>
            <label htmlFor="subject">FOOAS Message</label>
        <select name="FOOASMessages" onChange={(evt) => {
          setFooaMessage(evt.target.value)
        }}>
        {fooasOps.map( (ops, index) => (
          <option key={index} value={ops.url}>{ops.name}</option>
          ))}
        </select>
        <input name="subject" type="text" value={subject} placeholder="Assunto" onChange={(evt) => setSubject(evt.target.value)}/>
        </Select>
        : <><label htmlFor="subject">Assunto</label>
          <input name="subject" type="text" value={subject} onChange={(evt) => setSubject(evt.target.value)}/></>}

        <label htmlFor="message">Mensagem:</label>
        <textarea name="message" value={message} onChange={(evt) => setMessage(evt.target.value)}/>
      </MessageBox>
      <button onClick={() => sendMessage()}>Enviar</button>

    </Component>
  )
}

export default MessageComponent