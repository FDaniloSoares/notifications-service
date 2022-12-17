import { Content } from "./content";

describe('Notification content', () => {
  
  it('should be able to create a notification content', () => {
    const content = new Content('Vai dar certo 2023');
  
    expect(content).toBeTruthy();
  });
  
  it('should not be able to create a notification content with less than 5 characters', () => {
    
    // função dentro do expect quer dizer no momento da criação
    expect(() => new Content('Vai')).toThrow();
  });
  
  it('should not be able to create a notification content with more than 240 characters', () => {
    
    // função dentro do expect quer dizer no momento da criação
    expect(() => new Content('Vai'.repeat(240))).toThrow();
  });
});
