// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class CategoriesController {
  public async list() {
    return Database.from("categories")
  }
}
