import {Mapper} from '@wufe/mapper';

export interface IMapper {
    mapper: Mapper;
    initialize(): void;
}
