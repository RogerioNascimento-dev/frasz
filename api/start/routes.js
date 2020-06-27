'use strict'
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions','SessionController.store')

Route.post('PhrasesPublics','PhrasePublicController.store')



Route.resource('authors','AuthorController').apiOnly()
//Rotas autenticadas
Route.group(() =>{

}).middleware(['auth'])

