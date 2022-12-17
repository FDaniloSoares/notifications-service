import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(NotificationsRepository)

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'exemple-recipient-id'
    })
    
    expect(NotificationsRepository.notifications).toHaveLength(1);
    expect(NotificationsRepository.notifications[0]).toEqual(notification);
  })
});