export class Course {
  private readonly id: number;
  private title: string;

  constructor(title: string, id?: number) {
    if (id && id > 0) {
      this.id = id;
    } else {
      this.id = Math.floor(Math.random() * 1000); // Simulate auto-generated ID
    }

    if (!title || title.trim().length < 5) {
      console.log('Course title validation failed:', title);
      throw new Error('Title is required and it must be at least 5 characters long.');
    }
    this.title = title;
  }

  get properties() {
    return {
      id: this.id,
      title: this.title,
    };
  }

  update(title: string) {
    if (!title || title.trim().length < 5) {
      console.log('Course title validation failed:', title);
      throw new Error('Title is required and it must be at least 5 characters long.');
    }

    this.title = title;
  }
}
