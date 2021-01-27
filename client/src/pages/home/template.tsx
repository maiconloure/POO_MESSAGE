import React from 'react'
import MessageComponent from '../../components/message'
import MessageHistoryComponent from '../../components/messageHistory'
import SingUpComponent from '../../components/signup'
import { Component, MainBox, Title, OptionsBox, Options, Welcome } from './styled'
import { IHomeTemplate } from '../../interfaces/home'

const HomeTemplate: React.FC<IHomeTemplate> = ({ users, showPanel, setShowPanel }) => (
  <Component>
    <MainBox>
      <Title>MESSAGE SERVICE</Title>
      <div>
        <Options>
                <OptionsBox onClick={() => setShowPanel('signUp')}>
                  Cadastrar Usuário
                </OptionsBox>
                <OptionsBox onClick={() => setShowPanel('message')}>
                  Enviar Mensagem
                </OptionsBox>
                <OptionsBox onClick={() => setShowPanel('messageHistory')}>
                  Ver histórico de mensagens
                </OptionsBox>
                <OptionsBox onClick={() => setShowPanel('Home')}>
                  Sair
                </OptionsBox>
        </Options>

        {showPanel === 'Home' &&
        <Welcome>
          <h2>Selecione uma opção para começar...</h2>
        </Welcome>}

        {showPanel === 'signUp' && <SingUpComponent setShowPanel={setShowPanel} />}

        {showPanel === 'message' && <MessageComponent users={users} />}

        {showPanel === 'messageHistory' && <MessageHistoryComponent users={users} />}

    </div>
    </MainBox>
  </Component>
)

export default HomeTemplate
