import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class CategorySeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const Category = (await import("App/Models/Category")).default

    await Category.createMany([
      {
        id: 0,
        name: 'T-Shirt',
        icon: 'fas fa-tshirt'
      },
      {
        id: 1,
        name: 'Pantalon',
        icon: 'fas fa-tshirt'
      },
      {
        id: 2,
        name: 'Lunettes',
        icon: 'fas fa-tshirt'
      }
    ])
  }
}
