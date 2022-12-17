import { NotificationsRepository } from "../../src/appication/repositories/notifications-repository";
import { Notification } from "../../src/appication/entities/notification";

export class InMemoryNotificationsRepository implements NotificationsRepository{
  
  public notifications: Notification[] = [];
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  
}