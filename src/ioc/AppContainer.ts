import {NetworkModule} from './common/GraphQLModule'
import {appContainer} from "./common/Container"

import {CoursesModule} from "./modules/CoursesModule"

const initializeContainer = () => {
    appContainer.load(NetworkModule);
    appContainer.load(CoursesModule);
};

initializeContainer();

export {appContainer, initializeContainer};