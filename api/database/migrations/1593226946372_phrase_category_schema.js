'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhraseCategorySchema extends Schema {
  up () {
    this.create('phrase_categories', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('safe_name', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('phrase_categories')
  }
}

module.exports = PhraseCategorySchema
