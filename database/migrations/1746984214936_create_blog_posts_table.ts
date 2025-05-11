import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'blog_posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title', 255).notNullable()
      table.string('slug', 255).notNullable().unique()
      table.boolean('is_active').defaultTo(false)
      table.specificType('content', 'LONGTEXT').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}