import React from 'react';
import { UserComponent } from './styled'
interface IUser {
  name: string
  code: string
}

interface IUserProps {
  user: IUser
}

const User: React.FC<IUserProps> = ({ user }) => {
  return (<UserComponent>
    <strong>Nome: </strong>  {user.name} <br/>
    <strong>Código: </strong> {user.code}
  </UserComponent>)
}

export default User