export class EmailVO {
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(email: string): EmailVO {
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      throw new Error('Invalid email format');
    }

    return new EmailVO(email);
  }

  toValue(): string {
    return this.value;
  }
}
