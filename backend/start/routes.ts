/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

/*
  Product routes
 */
Route.get('/product', 'ProductsController.index')
Route.get('/products', 'productsController.getAll')
Route.get('/product/:id', 'ProductsController.show')
Route.get('/product/remove/:id', 'ProductsController.remove')
Route.post('/product/add', 'ProductsController.add')
Route.post('/product/edit', 'ProductsController.editProduct')

Route.get('/categories/:id', 'CategoriesController.index')
Route.get('/categories', 'CategoriesController.list')

/*
  Users routes
 */
Route.post('/users/register', 'UsersController.register')
Route.post('/users/login', 'UsersController.login')
Route.delete('/users/logout', 'UsersController.logout')
Route.get('/users/remove/:id', 'UsersController.remove')
Route.post('/users/edit', 'UsersController.editProfile')
Route.get('/users', 'UsersController.getAll')

Route.group(() => {
  Route.get('/users/me', 'UsersController.show')
}).middleware('auth')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})
