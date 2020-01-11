import { createStackNavigator } from 'react-navigation-stack';
import Boarding from '../screens/Boarding';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import { colors } from '../utils/constants';

const LoginStack = createStackNavigator(
  {
    Login
  },
  {
    headerMode: 'none'
  }
);

const RegistrationStack = createStackNavigator(
  {
    Registration
  },
  {
    headerMode: 'none'
  }
);

const BoardingStack = createStackNavigator(
  {
    Boarding,
    LoginStack,
    RegistrationStack
  },
  {
    defaultNavigationOptions: {
      headerTintColor: colors.primaryColor,
      headerTitleStyle: {
        color: colors.primaryColor,
        fontWeight: 'normal'
      },
      headerBackTitle: null,
      headerTitleAlign: 'center'
    }
  }
);

export default BoardingStack;
