
import React from "react";
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

        <Stack.Screen
          name="my-card"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="profile"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="add-profile"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default ScreensLayout;
