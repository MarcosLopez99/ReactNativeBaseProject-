import {Course} from '../models/Course';
import {ICoursesRepository} from '../repository/ICoursesRepository';
import {IGetCoursesUseCase} from './IGetCoursesUseCase';

export const GetCoursesUseCase = (
  CousesRepository: ICoursesRepository,
): IGetCoursesUseCase => ({
  execute(): Promise<Course[]> {
    return CousesRepository.getCourses();
  },
});
