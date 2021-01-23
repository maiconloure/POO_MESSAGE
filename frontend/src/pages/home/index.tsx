import React, { useState } from 'react';
import HomeTemplate from './template';

interface IUser {
  name: string
  code: string
}

interface IHome {
  users: IUser[]
}

const Home: React.FC<IHome> = ({ users }) => {
  const [showPanel, setShowPanel] = useState("Home")

  return (
    <HomeTemplate users={users} showPanel={showPanel} setShowPanel={setShowPanel} />
  )
}

export default Home;