import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ProductsController {
  public async index () {
    return Database.from('products').where('is_on_top', true).orderByRaw('random()').limit(7)
  }

  public async show ({ params }: HttpContextContract) {
    const product = Database.from('products').where('id', params.id)
    return product
  }

  public async remove ({ params }: HttpContextContract) {
    return Database.from('products').where('id', params.id).delete()
  }
}
