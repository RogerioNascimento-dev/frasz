'use strict'

const Author = use('App/Models/Author')
const Category = use('App/Models/PhraseCategory')
const Phrase = use('App/Models/Phrase')

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
  async index({request, response}){
    const queryParams = request.get()    
    const page = queryParams.page ? queryParams.page : 1
    
    const phrases = await Phrase.query()
    .with('author')
    .with('user')
    .when(queryParams.author_id, (q, value) => q.where('author_id', value))    
    .when(queryParams.user_id, (q, value) => q.where('user_id', value)) 
    .paginate(page);
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
