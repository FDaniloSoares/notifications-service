import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  
  it('should be able to create a notification', () => {
    const notificaion = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'recepient-id-exemple'
    });
  
    expect(notificaion).toBeTruthy();
  });
  
});