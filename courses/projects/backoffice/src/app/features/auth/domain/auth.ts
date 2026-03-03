import { EmailVO } from './value-objects';
import { MinLengthVO } from './value-objects/min-length.vo';

export class Auth {
  private readonly email: EmailVO;
  private readonly password: MinLengthVO;

  constructor(email: string, password: string) {
    this.email = EmailVO.create(email);
    this.password = MinLengthVO.create(password, 6);
  }

  get properties() {
    return {
      email: this.email.toValue(),
      password: this.password.toValue(),
    };
  }
}
