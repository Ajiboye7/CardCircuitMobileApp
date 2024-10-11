import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";

const ScreensLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen
        name="add-card"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  </>
  )
}

export default ScreensLayout;