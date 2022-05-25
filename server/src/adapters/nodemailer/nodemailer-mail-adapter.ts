import nodemailer from "nodemailer";
import { SendMailData } from "./../mail-adapter";
import { MailAdapter } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "704b6b361e554e",
    pass: "a2fc66a30d88d8",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "FeedGet Team <hi@feedget.com>",
      to: "Amanda Santos <amandasf0200@gmail.com>",
      subject,
      html: body,
    });
  }
}
