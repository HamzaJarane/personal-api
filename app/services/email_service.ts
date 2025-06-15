import EmailMessage from "#models/email_message";
import mail from '@adonisjs/mail/services/main';
import env from '#start/env';
import logger from '@adonisjs/core/services/logger';

export class EmailService {
  public async handleContactMessage(emailMessage: EmailMessage) {
    try {
      await mail.send((message) => {
        message
          .to(env.get('EMAIL_TO'))
          .from(env.get('EMAIL_FROM'), 'My website')
          .subject(`New message from: [ ${emailMessage.name} ] - [ ${emailMessage.email} ]`)
          .htmlView(
            'emails/contact_new_message',
            {
              email: emailMessage.email,
              name: emailMessage.name,
              message: emailMessage.message
            }
          )
      });
    } catch (error) {
      logger.error(error);
    }

    try {
      await mail.send((message) => {
        message
          .to(emailMessage.email)
          .from(env.get('EMAIL_FROM'), 'Hamza.im')
          .subject(`[AUTO-MESSAGE] Thanks for contacting - [ ${emailMessage.name} ]`)
          .htmlView(
            'emails/contact_reply_to_sender',
            {
              name: emailMessage.name,
            }
          )
      });
    } catch (error) {
      logger.error(error);
    }
  }
}