import { Request, Response } from 'express'

const users = [
  {name: "Maicon Lourenço", code: "44EE22AA"},
  {name: "João", code: "FF22ZZ55"}
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
}
