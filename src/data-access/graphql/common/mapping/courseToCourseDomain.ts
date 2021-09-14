import {Mapper} from '@wufe/mapper';
import {Course as CourseDomain} from 'domain/course/models/Course';
import {Course} from 'data-access/graphql/common/models/Course';
import {MAPPING_SIMBOLS} from 'data-access/common/MappingSymbols';

export const courseToCourseDomain = (mapper: Mapper) => {
  mapper.createMap<Course, CourseDomain>(
    {
      source: MAPPING_SIMBOLS.COURSE,
      destination: MAPPING_SIMBOLS.COURSE_DOMAIN,
    },
    CourseDomain,
  );
};
