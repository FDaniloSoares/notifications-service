import { KafkaConsumerService } from '@infra/messaging/kfaka/kfaka-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  
  const kfakaConsumerService = app.get(KafkaConsumerService);
  
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kfakaConsumerService
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
