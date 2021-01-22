import React, { useEffect, useState } from 'react';
import User from './components/User';
import API from './services/api'

interface IUser {
  name: string
  code: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    API.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="App">
      {users.map((user, index)=> <User key={index} user={user} />)}
    </div>
  );
}

export default App;
