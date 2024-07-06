import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Account from '../app/screens/Account';
import Chats from '../app/screens/Chats';
import Home from '../app/screens/Home';
import Settings from '../app/screens/Settings';
import { regular, semiBold } from '../app/utils/fonts';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  //   const tabBarHeight = useBottomTabBarHeight();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,

        headerTitleStyle: styles.header,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#02b875',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}
    >
      <BottomTabNavigator.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="message1"
              size={21}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
        name="chats"
        component={Chats}
      />
      <BottomTabNavigator.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={22}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              size={22}
              color={focused ? '#02b875' : 'gray'}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    ...semiBold,
    textTransform: 'capitalize',
  },
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    // backgroundColor: '#121212',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    ...regular,
    fontSize: 12,
  },
});
