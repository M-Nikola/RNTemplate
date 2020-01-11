import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loading from '../screens/Loading';
import Boarding from './BoardingStack';
import Tabs from './Tabs';

const AppNavigator = createSwitchNavigator(
  {
    Loading,
    Boarding,
    Tabs
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
