import { EmailDomainPipe } from './email-domain.pipe';

describe('EmailDomainPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailDomainPipe();
    expect(pipe).toBeTruthy();
  });
});
