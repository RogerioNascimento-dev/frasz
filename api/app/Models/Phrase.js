'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Phrase extends Model {
    static boot() {
        super.boot()
    
        this.addTrait('@provider:Lucid/When')
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
    author(){
        return this.belongsTo('App/Models/Author')
    }
    category(){
        return this.belongsTo('App/Models/PhraseCategory')
    }
}

module.exports = Phrase
