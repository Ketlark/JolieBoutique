import {BaseModel, column, hasOne} from "@ioc:Adonis/Lucid/Orm";
import Category from "App/Models/Category";
import {HasOne} from "@ioc:Adonis/Lucid/Relations";

export default class Product extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public name: string

  @column()
  public price: number

  @hasOne(() => Category, {})
  public category: HasOne<typeof Category>

  @column()
  public imageURL: string

  @column()
  public isOnTop: boolean
}
