import {ICoursesRepository} from 'domain/course/repository/ICoursesRepository';

import {IClient} from 'data-access/common/IClient';
import {IMapper} from 'data-access/common/IMapper';

import {GET_COURSES_QUERY} from './queries/getCoursesQuery';

import {Course as CourseDomain} from 'domain/course/models/Course';
import {Course} from 'data-access/graphql/common/models/Course';
import {MAPPING_SIMBOLS} from 'data-access/common/MappingSymbols';

import {ApolloClient, NormalizedCacheObject} from '@apollo/client';

export const CoursesRepository = (
  {client}: IClient<ApolloClient<NormalizedCacheObject>>,
  {mapper}: IMapper,
): ICoursesRepository => ({
  getCourses: async () => {
    const {data} = await client
      .query({query: GET_COURSES_QUERY})
      .catch(error => {
        console.log('Error API');
        throw error;
      });

    console.log(data);

    return mapper.map<Course[], CourseDomain[]>(
      {
        source: MAPPING_SIMBOLS.COURSE,
        destination: MAPPING_SIMBOLS.COURSE_DOMAIN,
      },
      data?.getCourses || [],
    );
  },
});
