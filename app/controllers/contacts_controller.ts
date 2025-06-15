import EmailMessage from '#models/email_message';
import { storeEmailValidator } from '#validators/email';
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger';
import db from '@adonisjs/lucid/services/db';
import { Exception } from '@adonisjs/core/exceptions';

export default class ContactsController {
    public async store({ request, response }: HttpContext) {
        const data = request.all();

        const payload = await storeEmailValidator.validate(data);
        const pastMessages = await EmailMessage.query().where('email', payload.email).orWhere('ip', request.ip());

        if(pastMessages.length >= 3) {
            return response.tooManyRequests({
                message: 'You can\'t send anymore messages'
            });
        }

        const trx = await db.transaction();

        try {
            EmailMessage.create({ 
                ...payload,
                ip: request.ip(),
            });

            trx.commit();
        } catch (e) {
            trx.rollback();
            logger.error(e);

            throw new Exception('Server error', {
                status: 500,
                code: 'E_SERVER_ERROR',
            });
        }

        return response.ok({});
    }
}