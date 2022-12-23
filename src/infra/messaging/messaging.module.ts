import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { notificationsController } from './kfaka/controllers/notifications.controller';
import { KafkaConsumerService } from './kfaka/kfaka-consumer.service';


@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [notificationsController]
})
export class MessagingModule { }