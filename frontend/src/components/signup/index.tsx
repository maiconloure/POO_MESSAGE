import React, { useState } from 'react';
import API from '../../services/api';
import { Component, SignUpForm } from './styled'
import { useToasts } from 'react-toast-notifications'

interface ISingUp {
  setShowPanel:React.Dispatch<React.SetStateAction<string>>
}

const SingUpComponent: React.FC<ISingUp> = ({ setShowPanel }) => {
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const { addToast } = useToasts()


  const singUpUser = (evt: any) => {
    evt.preventDefault()
    const data = {name, code}
    console.log(data)
    API.post('/users/create', data)
    .then((res) => {
      addToast('Cadastro efetuado com sucesso!', { appearance: 'success', autoDismiss: true })
      setShowPanel("Home")
    }).catch((err) => {
      addToast('Código já cadastrado!', { appearance: 'error', autoDismiss: true })
    })
  }


  return (
  <Component>
    <SignUpForm>
      <div>
      <label htmlFor="fname">Nome: </label>
      <input type="text" id="fname" name="fname"  value={name} onChange={evt => setName(evt.target.value)} />
      </div>

      <div>
      <label htmlFor="code">Código: </label>
      <input type="text" id="code" name="code" value={code} onChange={evt => setCode(evt.target.value)} />
      </div>

      <input type="submit" value="Cadastrar" onClick={singUpUser} />
    </SignUpForm>
  </Component>
  )
}

export default SingUpComponent;