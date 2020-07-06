import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import LoginValidator from 'App/Validators/LoginValidator'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
  public async show ({ auth }: HttpContextContract) {
    const user = User.query().where('id', auth.user!.id).first()
    return user
  }

  public async login ({ auth, request, response }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    const remember = !!request.post().remember

    const user = await User.query().where('email', data.email).first()

    console.log(data.email, data.password)
    console.log(user)

    if (!user || user.email !== data.email || !(await Hash.verify(user.password, data.password))) {
      return response.internalServerError('Identifiants invalides.')
    }
    await auth.login(user, remember)
    return response.ok('Vous vous êtes connecté avec succès.')
  }

  public async logout () {
  }

  public async register ({ auth, request, response }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)

    const alreadyExist = await User.query()
      .where('email', data.email)
      .first()

    if (alreadyExist) {
      return response.internalServerError('L\'adresse email ou le pseudo est déjà utilisé.')
    }

    await User.create(data)
    const dataAuth = await auth.attempt(data.email, data.password)
    console.log('Auth', dataAuth)

    return response.ok('Vous vous êtes inscrit avec succès.')
  }
}
