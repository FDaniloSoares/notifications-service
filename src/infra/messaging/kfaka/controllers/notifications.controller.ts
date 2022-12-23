import { SendNotification } from "@application/use-cases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class notificationsController {

  constructor(private sendNotification: SendNotification) { }

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() { content, category, recipientId }: SendNotificationPayload ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId
    })

    console.log('Mensagem processada', '\n');
    console.log({ content, category, recipientId })

  }

}