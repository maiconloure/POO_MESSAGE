import { users } from '@models/User'
import UserService from '@services/UserService'
import { Request, Response } from 'express'

export default class UserController {
  private userService: UserService

  constructor () {
    this.userService = new UserService()
  }

  async index (req: Request, res: Response) {
    return res.json(users)
  }

  async create (req: Request, res: Response) {
    const data = req.body

    if (!this.userService.checkUserRegistered(data)) {
      await this.userService.signup(data)
      return res.sendStatus(200)
    }

    return res.sendStatus(400)
  }
}
