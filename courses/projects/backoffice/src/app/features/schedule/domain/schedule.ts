export class Schedule {
  static #autoIncrement = 0;

  private readonly scheduleId: number;
  private courseId: number;
  private title: string;
  private summary: string;
  private chapters: string[];
  private requirements: string[];
  private goals: string[];
  private teacher: string;
  private pricePen: number;
  private duration: string;
  private frequency: string;
  private dateStart: Date;

  constructor(
    data: {
      title: string;
      courseId: number;
      summary: string;
      chapters: string[];
      requirements: string[];
      goals: string[];
      teacher: string;
      pricePen: number;
      duration: string;
      frequency: string;
      dateStart: Date;
    },
    scheduleId?: number,
  ) {
    if (scheduleId && scheduleId > 0) {
      this.scheduleId = scheduleId;
    } else {
      this.scheduleId = ++Schedule.#autoIncrement;
    }

    if (!data.title || data.title.trim().length < 5) {
      throw new Error('Title is required and it must be at least 5 characters long.');
    }

    this.courseId = data.courseId;
    this.title = data.title;
    this.summary = data.summary;
    this.chapters = data.chapters;
    this.requirements = data.requirements;
    this.goals = data.goals;
    this.teacher = data.teacher;
    this.pricePen = data.pricePen;
    this.duration = data.duration;
    this.frequency = data.frequency;
    this.dateStart = data.dateStart;
  }

  get properties() {
    return {
      scheduleId: this.scheduleId,
      courseId: this.courseId,
      title: this.title,
      summary: this.summary,
      chapters: this.chapters,
      requirements: this.requirements,
      goals: this.goals,
      teacher: this.teacher,
      pricePen: this.pricePen,
      duration: this.duration,
      frequency: this.frequency,
      dateStart: this.dateStart,
    };
  }

  update(data: Partial<Omit<Schedule['properties'], 'scheduleId'>>) {
    if (data.title !== undefined) {
      if (!data.title || data.title.trim().length < 5) {
        throw new Error('Title is required and it must be at least 5 characters long.');
      }
      this.title = data.title;
    }
    if (data.courseId !== undefined) this.courseId = data.courseId;
    if (data.summary !== undefined) this.summary = data.summary;
    if (data.chapters !== undefined) this.chapters = data.chapters;
    if (data.requirements !== undefined) this.requirements = data.requirements;
    if (data.goals !== undefined) this.goals = data.goals;
    if (data.teacher !== undefined) this.teacher = data.teacher;
    if (data.pricePen !== undefined) this.pricePen = data.pricePen;
    if (data.duration !== undefined) this.duration = data.duration;
    if (data.frequency !== undefined) this.frequency = data.frequency;
    if (data.dateStart !== undefined) this.dateStart = data.dateStart;
  }
}
