import { BaseCommand } from '@adonisjs/ace/build'

export default class SeedDB extends BaseCommand {
  public static commandName = 'seed:shop'
  public static description = 'Command to seed the database while Adonis 5 does not provide seeds/factories'

  public static settings = {
    loadApp: true,
  }

  /**
   * Executes a shell command and return it as a Promise.
   */
  private execShellCommand (cmd: string): Promise<string> {
    const exec = require('child_process').exec

    return new Promise((resolve) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.warn(error)
        }
        resolve(stdout ? stdout : stderr)
      })
    })
  }

  public async handle () {
    const Database = (await import('@ioc:Adonis/Lucid/Database')).default
    const Category = (await import('App/Models/Category')).default
    const Product = (await import('App/Models/Product')).default

    this.logger.info('Seeding launched.')

    // Reset Database
    await this.execShellCommand('node ace migration:rollback')
    await this.execShellCommand('node ace migration:run')

    this.logger.info('Start categories seed !')
    await Category.createMany([
      {
        id: 0,
        name: 'T-Shirt',
        icon: 'fas fa-tshirt',
      },
      {
        id: 1,
        name: 'Sweatshirt',
        icon: 'fas fa-tshirt',
      },
      {
        id: 2,
        name: 'Pantalon',
        icon: 'fas fa-tshirt',
      },
      {
        id: 3,
        name: 'Lunettes',
        icon: 'fas fa-glasses',
      },
      {
        id: 4,
        name: 'Chaussures',
        icon: 'fas fa-shoe-prints',
      },
      {
        id: 5,
        name: 'Chaussettes',
        icon: 'fas fa-socks',
      },
      {
        id: 6,
        name: 'Vestes',
        icon: 'fas fa-tshirt',
      },
      {
        id: 7,
        name: 'Casquettes',
        icon: 'fab fa-redhat',
      },
      {
        id: 8,
        name: 'Bracelets',
        icon: 'fas fa-ring',
      },
    ])
    this.logger.info('Categories seeded !')

    this.logger.info('Start products seed !')
    await Product.createMany([
      {id: 0, categoryId: 0, name: 'T-Shirt Blanc', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/0kty.png', isOnTop: true},
      {id: 1, categoryId: 0, name: 'T-Shirt Noir', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/jcxq.png', isOnTop: true},
      {id: 2, categoryId: 0, name: 'T-Shirt Rouge', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/qs1w.png', isOnTop: true},
      {id: 3, categoryId: 0, name: 'T-Shirt Jaune', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/cd4r.png', isOnTop: true},
      {id: 4, categoryId: 0, name: 'T-Shirt Vert', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/196h.png', isOnTop: true},
      {id: 5, categoryId: 0, name: 'T-Shirt Bleu', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/8n55.png', isOnTop: true},
      {id: 6, categoryId: 0, name: 'T-Shirt Rose', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/vs9o.png', isOnTop: true},
      {id: 7, categoryId: 0, name: 'T-Shirt Orange', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/k4ul.png', isOnTop: true},
      {id: 8, categoryId: 0, name: 'T-Shirt Marron', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/ve6j.png', isOnTop: true},
      {id: 9, categoryId: 0, name: 'T-Shirt Cyan', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/5l6q.png', isOnTop: true},
      {id: 10, categoryId: 0, name: 'T-Shirt Gris', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/pod6.png', isOnTop: true},
      {id: 11, categoryId: 0, name: 'T-Shirt Violet', price: 14.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imageURL: 'https://zupimages.net/up/20/27/pdwd.png', isOnTop: true},
    ])
    this.logger.info('Products seeded !')

    await Database.manager.closeAll()
    this.logger.success('Seed finished.')
  }
}
