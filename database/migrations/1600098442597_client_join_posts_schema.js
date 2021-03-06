'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientJoinPostsSchema extends Schema {
  up () {
    this.create('client_join_posts', (table) => {
      table.integer('user_join_id', 5).unsigned()
      table.integer('post_id', 5).unsigned()
      table.timestamps()
      table.foreign('user_join_id')
      .references('clients.user_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.foreign('post_id')
      .references('posts.post_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('client_join_posts')
  }
}

module.exports = ClientJoinPostsSchema
