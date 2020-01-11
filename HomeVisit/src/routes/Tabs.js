import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Visits from '../screens/Visits';
import Settings from '../screens/Settings';

const HomeTab = createStackNavigator({
  Home
});

const VisitsTab = createStackNavigator({
  Visits
});

const SettingsTab = createStackNavigator({
  Settings
});

const Tabs = createBottomTabNavigator(
  {
    HomeTab,
    VisitsTab,
    SettingsTab
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default Tabs;
