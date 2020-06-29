import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class CategoriesController {
  public async list () {
    return Database.from('categories')
  }

  public async index ({params}: HttpContextContract) {
    return Database.from('products').where('category_id', params.id)
  }
}
