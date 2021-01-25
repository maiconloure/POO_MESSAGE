import React, { useEffect, useState } from 'react'
import HomeTemplate from './template'
import API from '../../services/api'
import { IUser } from '../../interfaces/user'

const Home: React.FC = () => {
  const [showPanel, setShowPanel] = useState('Home')
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

export default Home
