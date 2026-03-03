export class MinLengthVO {
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string, minLength: number): MinLengthVO {
    if (value.length < minLength) {
      throw new Error(`Value must be at least ${minLength} characters long`);
    }

    return new MinLengthVO(value);
  }

  toValue(): string {
    return this.value;
  }
}
