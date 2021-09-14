import {Course} from '../models/Course';
import {IUseCase} from '../../common/IUseCase';

export interface IGetCoursesUseCase extends IUseCase<void, Course[]> {}
