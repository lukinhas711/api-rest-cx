import { Router } from 'express'
// import { StatusCodes } from 'http-status-codes'

import { citiesController } from './../controllers'

const router = Router()


router.get('/', (req, res) => {
  res.send('Olá, Dev')
})

router.post('/cidades', citiesController.create)

export { router }