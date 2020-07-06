import {BaseModel, beforeCreate, column, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Address from 'App/Models/Address'
import {HasMany} from '@ioc:Adonis/Lucid/Relations'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public surname: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string

  @hasMany(() => Address, { foreignKey: 'userId' })
  public address: HasMany<typeof Address>

  @beforeCreate()
  public static async beforeCreateHook (userInstance: User) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}
