'use strict'
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions','SessionController.store')
Route.post('phrasesPublics','PhrasePublicController.store')




//Rotas autenticadas
Route.group(() =>{
    Route.get('authors','AuthorController.index')
    Route.get('categories','PhraseCategoryController.index')
    Route.get('phrases','PhraseController.index')
    Route.post('phrases','PhraseController.store')
}).middleware(['auth'])

