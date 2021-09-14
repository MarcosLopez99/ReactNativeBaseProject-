import {Student} from './Student';

enum Level {
  principiante,
  intermedio,
  avanzado,
}

export class Course {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly teacher: string,
    public readonly description: string,
    public readonly topic: string,
    public readonly students: Student[],
    public readonly level: Level,
  ) {}
}
