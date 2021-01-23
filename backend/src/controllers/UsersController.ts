import { users } from '@models/User';
import UserService from '@services/UserService';
import { Request, Response } from 'express'

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const userService = new UserService();
    const data = req.body

    if (!userService.checkUserRegistered(data)) {
      const user = await userService.signup(data)
      return res.sendStatus(200)
    }

    return res.sendStatus(400)
  }
}
