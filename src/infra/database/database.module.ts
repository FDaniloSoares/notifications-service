import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/appication/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notificatios-repository";


@Module({
  providers:[
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [NotificationsRepository]
})
export class DatabaseModule {}