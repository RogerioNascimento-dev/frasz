'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PhraseLike extends Model {
    phrase(){
        return this.belongsTo('App/Models/Phrase')
    }
}

module.exports = PhraseLike
