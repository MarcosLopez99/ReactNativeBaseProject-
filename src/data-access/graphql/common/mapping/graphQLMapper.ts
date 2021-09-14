import {Mapper} from '@wufe/mapper';
import {IMapper} from 'data-access/common/IMapper';
import {courseToCourseDomain} from './courseToCourseDomain';

export const GraphQLMapper = (): IMapper => ({
  mapper: new Mapper(),
  initialize() {
    this.mapper.withConfiguration(configuration =>
      configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true),
    );

    courseToCourseDomain(this.mapper);
  },
});
