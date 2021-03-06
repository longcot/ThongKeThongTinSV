import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import NotificationScreen from './src/screens/Notification/NotificationScreen';
import ShowNotificationScreen from './src/screens/Notification/ShowNotificationScreen';
import AddNotificationScreen from './src/screens/Notification/AddNotificationScreen';
import CreateNotificationScreen from './src/screens/Notification/CreateNotificationScreen';
import StudentNotiScreen from './src/screens/Notification/Student/StudentNotiScreen';
import StudentShowNotiScreen from './src/screens/Notification/Student/StudentShowNotiScreen';

import SigninScreen from './src/screens/SigninScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import AccountScreen from './src/screens/Account/AccountScreen';
import ResetPasswordScreen from './src/screens/Account/ResetPasswordScreen';

import ToolScreen from './src/screens/Tool/ToolScreen';
import ProfileScreen from './src/screens/Tool/ProfileScreen';
import ProgramScreen from './src/screens/Tool/ProgramScreen';
import ScoreScreen from './src/screens/Tool/ScoreScreen';
import TuitionScreen from './src/screens/Tool/TuitionScreen';
import UpdateProfileScreen from './src/screens/Tool/UpdateProfileScreen';

import ManagementScreen from './src/screens/ManagementScreen';
import StatisticScreen from './src/screens/StatisticScreen';
import DataTableScreen from './src/screens/DataTableScreen';
import AccManagerScreen from './src/screens/AccManagerScreen';
import AccountTableScreen from './src/screens/AccountTableScreen';
import SvProfileScreen from './src/screens/SvProfileScreen';
import UpdateSvProfileScreen from './src/screens/UpdateSvProfileScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as StatProvider } from './src/context/StatisticContext';
import { Provider as NotificationProvider } from './src/context/NotificationContext';
import { Provider as ProfProvider } from './src/context/ProfContext';
import { setNavigator } from './src/navigationRef';


const toolFlow = createStackNavigator({
  Tool: {
    screen:ToolScreen,
    navigationOptions: ({navigation}) => {
      return { title: "C??ng c???"}
    }
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Th??ng tin c?? nh??n"}
    }
  },
  Program: {
    screen:ProgramScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Ch????ng tr??nh ????o t???o"}
    }
  },
  Score: {
    screen:ScoreScreen,
    navigationOptions: ({navigation}) => {
      return { title: "B???ng ??i???m"}
    }
  },
  Tuition: {
    screen:TuitionScreen,
    navigationOptions: ({navigation}) => {
      return { title: "H???c ph??"}
    }
  },
  UpdateProfile: {
    screen:UpdateProfileScreen,
    navigationOptions: ({navigation}) => {
      return { title: "C???p nh???t th??ng tin"}
    }
  },
})

const studentNotiFlow = createStackNavigator({
  StudentNoti: {
    screen:StudentNotiScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Th??ng b??o"}
    }
  },
  StudentShowNoti: {
    screen:StudentShowNotiScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Xem th??ng b??o"}
    }
  }
})

const accountFlow= createStackNavigator({
  Account: {
    screen:AccountScreen,
    navigationOptions: ({navigation}) => {
      return { title: "T??i kho???n"}
    }
  },
  ResetPassword: {
    screen:ResetPasswordScreen,
    navigationOptions: ({navigation}) => {
      return { title: "?????t l???i m???t kh???u"}
      }
  }
})

const qtvNotiFlow= createStackNavigator({
  Notification: {
    screen:NotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Th??ng b??o"}
    }
  },
  AddNotification: {
    screen:AddNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Th??m th??ng b??o"}
    }
  },
  ShowNotification: {
    screen:ShowNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Xem th??ng b??o"}
    }
  },
  CreateNotification: {
    screen:CreateNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "T???o th??ng b??o"}
    }
  }
})

const managementFlow= createStackNavigator({
    Management: {
      screen:ManagementScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Qu???n l??"}
      }
    },
    Statistic: {
      screen:StatisticScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Th???ng k??"}
      }
    },
    DataTable: {
      screen:DataTableScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Danh s??ch sinh vi??n"}
      }
    },
    AccManager: {
      screen:AccManagerScreen,
      navigationOptions: ({navigation}) => {
        return { title: "T??m ki???m sinh vi??n"}
      }
    },
    AccountTable: {
      screen:AccountTableScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Danh s??ch sinh vi??n"}
      }
    },
    SvProfile: {
      screen:SvProfileScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Th??ng tin sinh vi??n"}
      }
    },
    UpdateSvProfile: {
      screen:UpdateSvProfileScreen,
      navigationOptions: ({navigation}) => {
        return { title: "C???p nh???t th??ng tin sinh vi??n"}
      }
    }
})

toolFlow.navigationOptions = {
  title: 'C??ng c???',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

managementFlow.navigationOptions = {
  title: 'Qu???n l??',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

studentNotiFlow.navigationOptions = {
  title: 'Th??ng b??o',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

qtvNotiFlow.navigationOptions = {
  title: 'Th??ng b??o',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

accountFlow.navigationOptions = {
  title: 'T??i kho???n',
  tabBarIcon: <MaterialIcons name="person-outline" size={24} color="black" />
}
//<Ionicons name="ios-person" size={24} color="black" />



const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen
  }),
  SvFlow: createBottomTabNavigator({
    studentNotiFlow,
    toolFlow,
    accountFlow
  }),
  QtvFlow: createBottomTabNavigator({
    qtvNotiFlow,
    managementFlow,
    accountFlow
  })
});
const App = createAppContainer(switchNavigator);

export default () => {
  
  return (
    <StatProvider>
      <AuthProvider>
        <NotificationProvider>
          <ProfProvider>
            <App ref={(navigator) => { setNavigator(navigator) }} />
          </ProfProvider>
        </NotificationProvider>
      </AuthProvider>
    </StatProvider>
  )
};