import React from 'react';
import { Provider } from 'mobx-react';
import { enableScreens } from 'react-native-screens';
import store from './stores/testStore';
import AppNavigator from './routes';
import 'react-native-gesture-handler';

enableScreens();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
