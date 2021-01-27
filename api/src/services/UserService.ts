import User, { users } from '@models/User'
import { IUser } from '../interfaces/user'
import Memory from '../infra/data/memory'

interface IUserService {
  signup({ name, code }: IUser): void
  checkUserRegistered(data: IUser): boolean
}

class UserService implements IUserService {
  public signup ({ name, code }: IUser): void {
    const user = new User({ name, code })
    Memory.users = [user]
  }

  public checkUserRegistered (data: IUser): boolean {
    for (const user of users) {
      if (data.code === user.code) {
        return true
      }
    }

    return false
  }
}

export default UserService
