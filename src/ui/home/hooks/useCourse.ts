import {useEffect, useState} from 'react';
import {useInjection} from 'ui/common/hooks/useDependencyProvider';
import {Course} from 'domain/course/models/Course';
import {IGetCoursesUseCase} from 'domain/course/UseCases/IGetCoursesUseCase';
import {DOMAIN_MODULES_SYMBOLS} from 'domain/DomainModuleSymbols';

export const useCourse = () => {
  const getCoursesList = useInjection<IGetCoursesUseCase>(
    DOMAIN_MODULES_SYMBOLS.GET_COURSES_USE_CASE,
  );

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    (async () => {
      const coursesList = await getCoursesList.execute();
      setCourses(coursesList);
    })();
  }, [getCoursesList]);

  return {
    courses,
  };
};
