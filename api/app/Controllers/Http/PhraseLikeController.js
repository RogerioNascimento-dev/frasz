'use strict'


const PhraseLike = use('App/Models/PhraseLike')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with phraselikes
 */
class PhraseLikeController {
  /**
   * Show a list of all phraselikes.
   * GET phraselikes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth }) {
    const dados = await PhraseLike.query()     
    .with('phrase.author')    
    .with('phrase.user')    
    .where('user_id',auth.user.id)   
    .fetch()
    

    dados.rows.map((row) =>{
      row.liked = true   
    })

    return dados
  }

  
  /**
   * Create/save a new phraselike.
   * POST phraselikes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {phrase_id, action} = request.all();
    const user_id = auth.user.id;   

    if(action === 'LIKE'){
      const phraseLike = await PhraseLike.findOrCreate({user_id,phrase_id},
        {user_id,phrase_id});     
      return phraseLike;
    }else{
      await PhraseLike.query()      
      .where('phrase_id', phrase_id)
      .where('user_id',user_id)
      .delete();
      return true;
    }

  }

  /**
   * Display a single phraselike.
   * GET phraselikes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update phraselike details.
   * PUT or PATCH phraselikes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a phraselike with id.
   * DELETE phraselikes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PhraseLikeController
