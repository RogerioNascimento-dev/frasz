'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhraseSchema extends Schema {
  up () {
    this.create('phrases', (table) => {
      table.increments()
      table.text('text').notNullable()
      table.integer('shared').unsigned().defaultTo(0)
      table.integer('author_id')
      .defaultTo(null)
      .unsigned()
      .references('id')
      .inTable('authors')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
      table.integer('category_id') 
      .notNullable()     
      .unsigned()
      .references('id')
      .inTable('phrase_categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('user_id')
      .defaultTo(null)
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('phrases')
  }
}

module.exports = PhraseSchema
