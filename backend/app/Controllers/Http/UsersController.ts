import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import LoginValidator from 'App/Validators/LoginValidator'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
  public async show ({ auth }: HttpContextContract) {
    console.log('user auth ->', auth.user)
    const user = User.query().where('id', auth.user!.id).first()
    return user
  }

  public async login ({ auth, request, response, session }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    const remember = !!request.post().remember

    await auth.logout()
    session.clear()

    const user = await User.query().where('email', data.email).first()

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
    await auth.attempt(data.email, data.password)

    return response.ok('Vous vous êtes inscrit avec succès.')
  }

  public async remove ({ params }: HttpContextContract) {
    const user = await User.find(params.id)
    if(user) {
      return user.delete()
    } else {
      return 'Utilisateur non trouvé'
    }
  }

  public async editProfile ({ request }: HttpContextContract) {
    const data = request.post()
    const user = await User.find(data.id)

    if(user) {
      user.email = data.email || user.email
      user.surname = data.surname || user.surname
      user.name = data.name || user.name
      user.password = data.password || user.password

      return await user.save()
    } else {
      return 'Utilisateur non trouvé'
    }
  }
}
