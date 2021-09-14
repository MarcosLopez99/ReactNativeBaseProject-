import { Student } from "./student";

export interface Course {
  title: string;
  teacher: string;
  description: string;
  topic: string;
  students: Student[];
}
