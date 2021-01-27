import React from 'react'
import { IUser } from './user'

export interface IHomeTemplate {
  users: IUser[]
  showPanel: string
  setShowPanel:React.Dispatch<React.SetStateAction<string>>
}
