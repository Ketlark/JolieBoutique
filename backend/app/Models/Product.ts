import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public categoryId: number

  @column()
  public name: string

  @column()
  public price: number

  @column()
  public description: string

  @column()
  public imageURL: string

  @column()
  public isOnTop: boolean
}
