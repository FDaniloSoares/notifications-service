
import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social-2',
    content: new Content('Noca solicitação-2'),
    recipientId: 'fake-recipent-id',
    ...override
  });
}