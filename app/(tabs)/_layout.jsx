import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image } from "react-native";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from '@/constants';


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style= {{color:color}}
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
          backgroundColor : '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
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
             />
          ),
        }}
      />
    </Tabs>
  );
}
