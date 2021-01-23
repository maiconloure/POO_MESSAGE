import { User, users } from "@models/User"

interface IUser {
  name: string
  code: string
}

class UserService {

  signup({ name, code }: IUser): User {
    const user = new User({name, code});
    users.push(user.getUser())
    return user
  }

  checkUserRegistered(data: IUser): boolean {
    for (let user of users) {
      if (data.code == user.code) {
        return true
      }
    }
    return false
  }
}

export default UserService
