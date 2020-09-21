'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
        table.text('image_profile').after('password');
        table.string('origin_access',50).after('password');
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('image_profile');
      table.dropColumn('origin_access');
    })
  }
}

module.exports = UserSchema
