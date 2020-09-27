'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhraseLikeSchema extends Schema {
  up () {
    this.create('phrase_likes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
        .notNullable()     
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('phrase_id')
        .notNullable()     
        .unsigned()
        .references('id')
        .inTable('phrases')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('phrase_likes')
  }
}

module.exports = PhraseLikeSchema
