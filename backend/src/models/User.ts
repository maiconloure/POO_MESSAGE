import { IUser } from '../interfaces/user'

interface IUserModel {
  getUser(): IUser
  setUser(): void
}

export class User implements IUserModel {
  public name: string
  public code: string

  constructor ({ name, code }: IUser) {
    this.name = name
    this.code = code
  }

  getUser () {
    return { name: this.name, code: this.code }
  }

  setUser (name?: string, code?: string) {
    this.name = name || this.name
    this.code = code || this.code
  }
}

export const users: User[] = []
