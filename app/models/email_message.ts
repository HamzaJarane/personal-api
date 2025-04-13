import { DateTime } from 'luxon'
import { BaseModel, column, afterCreate } from '@adonisjs/lucid/orm'
import { EmailService } from '#services/email_service';


export default class EmailMessage extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare email: string;

    @column()
    declare name: string;

    @column()
    declare message: string;

    @column()
    declare ip: string;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @afterCreate()
    static async sendEmail(emailMessage: EmailMessage) {
        const emailService = new EmailService();
        emailService.handleContactMessage(emailMessage);
    }
}