'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PhraseCategory extends Model {
    phrases(){
        return this.hasMany('App/Models/Phrase','id','category_id')
    }
}

module.exports = PhraseCategory
