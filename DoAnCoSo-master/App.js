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
      return { title: "Công cụ"}
    }
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Thông tin cá nhân"}
    }
  },
  Program: {
    screen:ProgramScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Chương trình đào tạo"}
    }
  },
  Score: {
    screen:ScoreScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Bảng điểm"}
    }
  },
  Tuition: {
    screen:TuitionScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Học phí"}
    }
  },
  UpdateProfile: {
    screen:UpdateProfileScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Cập nhật thông tin"}
    }
  },
})

const studentNotiFlow = createStackNavigator({
  StudentNoti: {
    screen:StudentNotiScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Thông báo"}
    }
  },
  StudentShowNoti: {
    screen:StudentShowNotiScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Xem thông báo"}
    }
  }
})

const accountFlow= createStackNavigator({
  Account: {
    screen:AccountScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Tài khoản"}
    }
  },
  ResetPassword: {
    screen:ResetPasswordScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Đặt lại mật khẩu"}
      }
  }
})

const qtvNotiFlow= createStackNavigator({
  Notification: {
    screen:NotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Thông báo"}
    }
  },
  AddNotification: {
    screen:AddNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Thêm thông báo"}
    }
  },
  ShowNotification: {
    screen:ShowNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Xem thông báo"}
    }
  },
  CreateNotification: {
    screen:CreateNotificationScreen,
    navigationOptions: ({navigation}) => {
      return { title: "Tạo thông báo"}
    }
  }
})

const managementFlow= createStackNavigator({
    Management: {
      screen:ManagementScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Quản lý"}
      }
    },
    Statistic: {
      screen:StatisticScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Thống kê"}
      }
    },
    DataTable: {
      screen:DataTableScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Danh sách sinh viên"}
      }
    },
    AccManager: {
      screen:AccManagerScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Tìm kiếm sinh viên"}
      }
    },
    AccountTable: {
      screen:AccountTableScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Danh sách sinh viên"}
      }
    },
    SvProfile: {
      screen:SvProfileScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Thông tin sinh viên"}
      }
    },
    UpdateSvProfile: {
      screen:UpdateSvProfileScreen,
      navigationOptions: ({navigation}) => {
        return { title: "Cập nhật thông tin sinh viên"}
      }
    }
})

toolFlow.navigationOptions = {
  title: 'Công cụ',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

managementFlow.navigationOptions = {
  title: 'Quản lý',
  tabBarIcon: <MaterialCommunityIcons name="toolbox-outline" size={24} color="black" />
}

studentNotiFlow.navigationOptions = {
  title: 'Thông báo',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

qtvNotiFlow.navigationOptions = {
  title: 'Thông báo',
  tabBarIcon: <Ionicons name="ios-notifications-outline" size={24} color="black" />
}

accountFlow.navigationOptions = {
  title: 'Tài khoản',
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