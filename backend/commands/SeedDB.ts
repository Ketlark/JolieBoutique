import {BaseCommand} from "@adonisjs/ace/build";

export default class SeedDB extends BaseCommand {
  public static commandName = 'seed:shop'
  public static description = 'Command to seed the database while Adonis 5 does not provide seeds/factories'

  public static settings = {
    loadApp: true,
  }

  /**
   * Executes a shell command and return it as a Promise.
   */
  private execShellCommand(cmd: string): Promise<string> {
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

  public async handle() {
    const Database = (await import('@ioc:Adonis/Lucid/Database')).default
    const Category = (await import('App/Models/Category')).default

    this.logger.info('Seeding launched.')

    // Reset Database
    await this.execShellCommand('node ace migration:rollback')
    await this.execShellCommand('node ace migration:run')

    this.logger.info("Start categories seed !")
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

    this.logger.info("Categories seeded !")

    await Database.manager.closeAll()
    this.logger.success('Seed finished.')
  }
}
