import {Course} from '../models/Course';

export interface ICoursesRepository {
  getCourses(): Promise<Course[]>;
}
