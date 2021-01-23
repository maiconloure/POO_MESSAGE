import React, { useEffect, useState } from 'react';
import HomeTemplate from './template';
import API from '../../services/api'

interface IUser {
  name: string
  code: string
}

interface IHome {
  users: IUser[]
}

interface IUser {
  name: string
  code: string
}

const Home: React.FC = () => {
  const [showPanel, setShowPanel] = useState("Home")
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    API.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [showPanel])


  return (
    <HomeTemplate users={users} showPanel={showPanel} setShowPanel={setShowPanel} />
  )
}

export default Home;