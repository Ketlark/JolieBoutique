import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public userId: number

  @column()
  public zipCode: number

  @column()
  public city: string

  @column()
  public street: string
}
