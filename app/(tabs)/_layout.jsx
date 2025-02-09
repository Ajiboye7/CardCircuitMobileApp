import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image } from "react-native";

import { icons } from '@/constants';


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-[30px] h-[30px]"
      />
      <Text
        className={`${focused ? "font-[590px]" : "font-[400px]"} text-xs`} style= {{color:color}}
      >
        {name}
      </Text>
    </View>
  );
};




export default function TabLayout() {
  /*const colorScheme = useColorScheme();*/

  return (
    <Tabs
      screenOptions={{
       /* tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,*/
       tabBarActiveTintColor : '#7687DA',
        tabBarInactiveTintColor: '#808B96',
        tabBarStyle:{
          backgroundColor : '#808B9633',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
          borderRadius:20,
          marginBottom:15,
          marginLeft:10,
          marginRight:10,
          height: 98,
        },
        headerShown: false,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.homeTab}
            name='Home'
            color={color}
            focused={focused}
             />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.payment}
            name="Payment"
            color={color}
            focused={focused}
            
             />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.analytics}
            name="Analytics"
            color={color}
            focused={focused}
             />
          ),
        }}
      />
       <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.user}
            name="Account"
            color={color}
            focused={focused}
             />
          ),
        }}
      />
    </Tabs>
  );
}
