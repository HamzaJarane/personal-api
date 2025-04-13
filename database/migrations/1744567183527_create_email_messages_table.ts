import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'email_messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('email');
      table.string('name');
      table.string('message');
      table.string('ip');

      table.timestamp('created_at');
      table.timestamp('updated_at');
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}