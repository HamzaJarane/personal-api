import EmailMessage from "#models/email_message";
import mail from '@adonisjs/mail/services/main';
import env from '#start/env';

export class EmailService {
  public async handleContactMessage(emailMessage: EmailMessage) {
    await mail.send((message) => {
      message
        .to(env.get('EMAIL_TO'))
        .from(emailMessage.email)
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

    await mail.send((message) => {
      message
        .to(emailMessage.email)
        .from(env.get('EMAIL_FROM'))
        .subject(`[AUTO-MESSAGE] Thanks for contacting - [ ${emailMessage.name} ]`)
        .htmlView(
          'emails/contact_reply_to_sender',
          {
            name: emailMessage.name,
          }
        )
    });
  }
}