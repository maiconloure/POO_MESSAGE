import { User, users } from '@models/User'
import { IUser } from '../interfaces/user'

interface IUserService {
  signup({ name, code }: IUser): void
  checkUserRegistered(data: IUser): boolean
}

class UserService implements IUserService {
  public signup ({ name, code }: IUser): void {
    const user = new User({ name, code })
    users.push(user)
  }

  public checkUserRegistered (data: IUser): boolean {
    for (const user of users) {
      const userData = user.getUser()
      if (data.code === userData.code) {
        return true
      }
    }

    return false
  }
}

export default UserService
