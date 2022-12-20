import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Notification } from "@application/entities/notification";

export class InMemoryNotificationsRepository implements NotificationsRepository{
  
  public notifications: Notification[] = [];
  
  async findById(notificationId: string): Promise<Notification | null> {
    const notificaion = this.notifications.find((item) => item.id === notificationId)
    
    if (!notificaion) return null;
    return notificaion;
  }
  
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter((notification) => notification.recipientId === recipientId);
  }
  
  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((notification) => notification.recipientId === recipientId).length
  }
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id)
    
    if (notificationIndex>=0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}