import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSelector } from 'react-redux';

import { COLORS } from '../constants/themes/colors';
import { isAndroid } from '../utils';
import CartNavigator from './cart';
import OrderNavigator from './orders';
import ShopNavigator from './shop';
import ProfileNavigator from './profile';
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={15}
              color={COLORS.primaryDark}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={15}
              color={COLORS.primaryDark}
            />
          ),
          tabBarBadge: cart.length === 0 ? null : cart.length,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.secondary,
            color: COLORS.text,
            fontFamily: 'Lato-Bold',
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrderNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={15}
              color={COLORS.primaryDark}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={15}
              color={COLORS.primaryDark}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
