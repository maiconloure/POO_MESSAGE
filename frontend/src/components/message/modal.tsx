import React from 'react';
import styled from 'styled-components';

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
            setShowModal(false)}}>Sim</Button>
          <Button onClick={() => {
            setFooas(false)
            setShowModal(false)
          }}>Não</Button>
        </div>
    </MainComponent>
  )
}

export default Modal

export const MainComponent = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 400px;
  height: 200px;
  background: #FF6347;
  padding: 5px 20px;
  border-radius: 5px;
`

export const Message = styled.h2`
  font: 600 1.6rem Inter;

`

export const Button = styled.button`
  font: 700 1.4rem Inter;
  padding: 5px 10px;
  cursor: pointer;
  margin: 10px 20px;
`