import { Request, Response } from 'express'
import consola from 'consola'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface iCity {
  name: string
}

const bodyValidation: yup.SchemaOf<iCity> = yup.object().shape({
  name: yup.string().required().min(3)
})

export const create = async (req: Request<{}, {}, iCity>, res: Response) => {
  let validatedData: iCity | undefined = undefined

  try {
    validatedData = await bodyValidation.validate(req.body)
    consola.success(validatedData)
  } catch (error) {
    const yupError = error as yup.ValidationError
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: yupError.message
      }
    })
  }

  return res.send('Create cities controller')
}