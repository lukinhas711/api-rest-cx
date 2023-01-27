import { Request, Response } from 'express'

interface iCity {
  nome: string
}

export const create = (req: Request<{}, {}, iCity>, res: Response) => {
  const data = req.body

  console.log(data)


  return res.send('Create cities controller')
}