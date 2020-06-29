import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('category_id').notNullable()
      table.string('name').notNullable()
      table.decimal('price').notNullable()
      table.string('image_url').notNullable()
      table.boolean('is_on_top').notNullable().defaultTo(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
