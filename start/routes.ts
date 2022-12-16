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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('home')

Route.get('/signup', 'AuthController.signupShow').as('auth.signup.show')
Route.post('/signup', 'AuthController.signup').as('auth.signup')
Route.get('/signin', 'AuthController.signinShow').as('auth.signin.show')
Route.post('/signin', 'AuthController.signin').as('auth.signin')
Route.post('/signout', 'AuthController.signout').as('auth.signout')

Route.get('/teams/:id/edit', 'TeamsController.edit').as('teams.edit')
Route.put('/teams/:slug', 'TeamsController.update').as('teams.update')

Route.group(() => {

  Route.get('/', 'DashboardController.index').as('dashboard')

}).prefix(':teamSlug').as('app').middleware(['appState'])
