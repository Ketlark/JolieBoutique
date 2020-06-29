import {BaseModel, column, hasMany} from "@ioc:Adonis/Lucid/Orm";
import Address from "App/Models/Address";
import {HasMany} from "@ioc:Adonis/Lucid/Relations";
import { DateTime } from "luxon";

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public surname: string

  @hasMany(() => Address, { foreignKey: 'userId' })
  public address: HasMany<typeof Address>
}
