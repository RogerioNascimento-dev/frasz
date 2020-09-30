'use strict'

const Author = use('App/Models/Author')
const Category = use('App/Models/PhraseCategory')
const Phrase = use('App/Models/Phrase')
const PhraseLike = use('App/Models/PhraseLike')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with phrases
 */
class PhraseController {
  /**
   * Show a list of all phrases.
   * GET phrases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response,auth}){
    const queryParams = request.get()    
    const page = queryParams.page ? queryParams.page : 1
    //Obtem as frases paginadas
    const phrases = await Phrase.query()
    .with('author')
    .with('user')
    .when(queryParams.author_id, (q, value) => q.where('author_id', value))    
    .when(queryParams.user_id, (q, value) => q.where('user_id', value)) 
    .orderBy('shared','desc')
    .paginate(page);

    //Obtem as frases curtidas pelo usuário autenticado
    const idsLikeds = []
    const likeds = await PhraseLike.query()
    .with('phrase')
    .where('user_id',auth.user.id)
    .fetch()

    //cria um array simples somente com os ids das frases que o usuário curtiu
    likeds.rows.map((likeds) =>{
      idsLikeds.push(likeds.phrase_id)
    })

    /*
     * intera as frases e verifica se está entre os ids das frases curtidas
     * se estiver retorna true na posicao liked se não retorna false
    */

    phrases.rows.map((e) =>{
      e.liked = false
      if(idsLikeds.includes(e.id))
      e.liked = true
    })    

    return phrases
}

  
  /**
   * Create/save a new phrase.
   * POST phrases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {text,safe_name} = request.only(['text','safe_name']);
    const category = await Category.findByOrFail('safe_name',safe_name)
    const phrase = await Phrase.create(
      {
        text,
        user_id:auth.user.id,
        category_id:category.id
      });

    return phrase
  }

  /**
   * Display a single phrase.
   * GET phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }


  /**
   * Update phrase details.
   * PUT or PATCH phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a phrase with id.
   * DELETE phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PhraseController
