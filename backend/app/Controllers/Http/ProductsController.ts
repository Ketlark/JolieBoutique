import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index () {
    return Database.from('products').where('is_on_top', true).orderByRaw('random()').limit(7)
  }

  public async show ({params}: HttpContextContract) {
    const product = Database.from('products').where('id', params.id)
    return product
  }

  public async add ({request}: HttpContextContract) {
    const data = request.post()
    return await Product.create({
      id: data.id,
      categoryId: data.categoryId,
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: data.imageURL,
      isOnTop: data.isOnTop || false,
    })
  }

  public async editProduct ({request}: HttpContextContract) {
    const data = request.post()
    const product = await Product.find(data.id)

    if (product) {
      product.categoryId = data.categoryId || product.categoryId
      product.name = data.name || product.name
      product.price = data.price || product.price
      product.description = data.description || product.description
      product.imageURL = data.imageURL || product.imageURL
      product.isOnTop = data.isOnTop || product.isOnTop
    } else {
      return 'Produit non trouvé'
    }
  }

  public async remove ({params}: HttpContextContract) {
    return Database.from('products').where('id', params.id).delete()
  }

  public async getAll () {
    return Database.from('products')
  }
}
