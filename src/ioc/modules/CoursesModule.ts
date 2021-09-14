import {ContainerModule, interfaces} from 'inversify';

import {DOMAIN_MODULES_SYMBOLS} from 'domain/DomainModuleSymbols';
import {GetCoursesUseCase} from 'domain/course/UseCases/GetCoursesUseCase';
import {IGetCoursesUseCase} from 'domain/course/UseCases/IGetCoursesUseCase';
import {ICoursesRepository} from 'domain/course/repository/ICoursesRepository';

import {DataModuleSymbols} from 'data-access/DataAccessModuleSymbols';
import {CoursesRepository} from 'data-access/graphql/course/CoursesRepository';

import {applyDependencies} from '../common/ApplyDependencies';


const initializeCountryModule = (bind: interfaces.Bind) => {
    bind<ICoursesRepository>(DataModuleSymbols.COURSES_REPOSITORY).toConstantValue(
        applyDependencies(CoursesRepository, [
            DataModuleSymbols.GRAPHQL_CLIENT,
            DataModuleSymbols.GRAPHQL_MAPPER,
        ]),
    );
    bind<IGetCoursesUseCase>(DOMAIN_MODULES_SYMBOLS.GET_COURSES_USE_CASE).toConstantValue(
        applyDependencies(GetCoursesUseCase, [DataModuleSymbols.COURSES_REPOSITORY]),
    );
}

export const CoursesModule = new ContainerModule(initializeCountryModule);
