import React from 'react';
import MessageComponent from '../../components/message';
import MessageHistoryComponent from '../../components/messageHistory';
import SingUpComponent from '../../components/signup';
import {Component, MainBox, Title, OptionsBox, Content, Options, Welcome }  from './styled';

interface IHome {
  signUp: boolean
  message: boolean
  messageHistory: boolean
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>
  setMessage: React.Dispatch<React.SetStateAction<boolean>>
  setMessageHistory:React.Dispatch<React.SetStateAction<boolean>>
}

const HomeTemplate: React.FC<IHome> = ({ signUp, setSignUp, message, setMessage,  messageHistory, setMessageHistory }) => (
  <Component>
    <MainBox>

      <Title>MESSAGE SERVICE</Title>
      <Content>
        <Options>
                <OptionsBox onClick={() => setSignUp(true)}>
                  Cadastrar Usuário
                </OptionsBox>
                <OptionsBox onClick={() => setMessage(true)}>
                  Enviar Mensagem
                </OptionsBox>
                <OptionsBox onClick={() => setMessageHistory(true)}>
                  Ver histórico de mensagens
                </OptionsBox>
                <OptionsBox>
                  Sair
                </OptionsBox>
        </Options>
        
        {!signUp && !message && !messageHistory && 
        <Welcome>
          <h2>Selecione uma opção para começar...</h2>
        </Welcome>
        }
        
        {signUp && <SingUpComponent />}
        {message && <MessageComponent />}
        {messageHistory && <MessageHistoryComponent />}
        
    </Content>
      
    </MainBox>
  </Component>
)

export default HomeTemplate;