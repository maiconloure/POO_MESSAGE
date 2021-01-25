import React from 'react'
import { MainComponent, Message, Button } from './styled'

interface IModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setFooas: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IModal> = ({ setShowModal, setFooas }) => {
  return (
    <MainComponent>
      <Message>Deseja enviar uma mensagem apimentada?</Message>
        <div>
          <Button onClick={() => {
            setFooas(true)
            setShowModal(false)
          }}>Sim</Button>
          <Button onClick={() => {
            setFooas(false)
            setShowModal(false)
          }}>Não</Button>
        </div>
    </MainComponent>
  )
}

export default Modal
