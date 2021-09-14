import {appContainer} from 'ioc/AppContainer';
import React from 'react';
import { View} from 'react-native';
import {DependencyProvider} from '../common/context/DependencyProvider';
import {HomeScreen} from '../home/screens/HomeScreen';

const App = () => {
  return (
    <DependencyProvider container={appContainer}>
      <React.Suspense fallback={<View>...Loading</View>}>
        <HomeScreen />
      </React.Suspense>
    </DependencyProvider>
  );
};

export default App;
